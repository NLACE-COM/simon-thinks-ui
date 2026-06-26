#!/usr/bin/env bash
#
# optimize.sh — generate lightweight, web-ready derivatives from the high-res
# originals in this media bank. Originals (images/, videos/) are kept untouched
# and versioned with Git LFS; the small outputs land in optimized/ and are the
# ones you should ship to the browser.
#
# Idempotent: re-running only rebuilds outputs whose source is newer.
#
# Requirements (macOS):  cwebp + ffmpeg + sips
#   brew install webp ffmpeg     # sips is built in
#
# Image tiers (longest edge, px):
#   hero    1600   large / full-bleed surfaces
#   card     800   content blocks, grid cards, thumbnails
#   Each tier is emitted as .webp (primary, lightest); the hero tier also
#   gets a .jpg fallback for contexts without WebP support (email, older tools).
#   Originals stay available for 4K / print / true full-screen needs.
#
# Video: re-encoded H.264 (CRF 30, faststart) with audio stripped — these are
#   ambient/background loops. Plus a poster frame for lazy-loading.
#
set -euo pipefail
cd "$(dirname "$0")"

IMG_SRC=images
VID_SRC=videos
OUT_IMG=optimized/images
OUT_VID=optimized/videos
mkdir -p "$OUT_IMG" "$OUT_VID"

HERO_MAX=1600;  HERO_WEBP_Q=78;  HERO_JPG_Q=72
CARD_MAX=800;   CARD_WEBP_Q=74
VIDEO_CRF=30
POSTER_AT=0.1     # fraction of duration to grab the poster frame from

have() { command -v "$1" >/dev/null 2>&1; }
for bin in cwebp ffmpeg ffprobe sips; do
  have "$bin" || { echo "✗ missing dependency: $bin"; exit 1; }
done

# longest-edge downscale dims (never upscales) -> echoes "W H" or "" if no resize
fit() { # $1=w $2=h $3=max
  awk -v w="$1" -v h="$2" -v m="$3" 'BEGIN{
    lng = (w>h)?w:h
    if (lng<=m){ print ""; exit }
    f=m/lng; printf "%d %d", int(w*f+0.5), int(h*f+0.5)
  }'
}

optimize_image() {
  local src="$1" name dims w h
  name=$(basename "${src%.*}")
  dims=$(sips -g pixelWidth -g pixelHeight "$src" 2>/dev/null \
         | awk '/pixelWidth/{w=$2}/pixelHeight/{h=$2}END{print w" "h}')
  w=${dims% *}; h=${dims#* }

  local hero_webp="$OUT_IMG/${name}-hero.webp"
  local hero_jpg="$OUT_IMG/${name}-hero.jpg"
  local card_webp="$OUT_IMG/${name}-card.webp"

  local rh rc
  rh=$(fit "$w" "$h" "$HERO_MAX")   # "" => already small enough
  rc=$(fit "$w" "$h" "$CARD_MAX")

  if [ "$src" -nt "$hero_webp" ]; then
    cwebp -quiet -q "$HERO_WEBP_Q" ${rh:+-resize $rh} "$src" -o "$hero_webp"
  fi
  if [ "$src" -nt "$hero_jpg" ]; then
    if [ -n "$rh" ]; then
      sips -z ${rh#* } ${rh% *} -s format jpeg -s formatOptions "$HERO_JPG_Q" "$src" --out "$hero_jpg" >/dev/null
    else
      sips -s format jpeg -s formatOptions "$HERO_JPG_Q" "$src" --out "$hero_jpg" >/dev/null
    fi
  fi
  if [ "$src" -nt "$card_webp" ]; then
    cwebp -quiet -q "$CARD_WEBP_Q" ${rc:+-resize $rc} "$src" -o "$card_webp"
  fi
  printf "  img %-46s %5s/%-5s/%-5s\n" "$name" \
    "$(du -h "$hero_webp"|cut -f1)" "$(du -h "$hero_jpg"|cut -f1)" "$(du -h "$card_webp"|cut -f1)"
}

optimize_video() {
  local src="$1" name out poster dur ts
  name=$(basename "${src%.*}")
  out="$OUT_VID/${name}.mp4"
  poster="$OUT_VID/${name}-poster.jpg"

  if [ "$src" -nt "$out" ]; then
    ffmpeg -nostdin -y -loglevel error -i "$src" \
      -an -c:v libx264 -crf "$VIDEO_CRF" -preset slow \
      -pix_fmt yuv420p -movflags +faststart "$out"
  fi
  if [ "$src" -nt "$poster" ]; then
    dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$src" 2>/dev/null || echo 1)
    ts=$(awk -v d="$dur" -v p="$POSTER_AT" 'BEGIN{printf "%.2f", d*p}')
    ffmpeg -nostdin -y -loglevel error -ss "$ts" -i "$src" -frames:v 1 -q:v 3 "$poster"
  fi
  printf "  vid %-40s %6s -> %6s (+poster %s)\n" "$name" \
    "$(du -h "$src"|cut -f1)" "$(du -h "$out"|cut -f1)" "$(du -h "$poster"|cut -f1)"
}

echo "▸ Images → $OUT_IMG"
for f in "$IMG_SRC"/*; do [ -f "$f" ] && optimize_image "$f"; done
echo "▸ Videos → $OUT_VID"
for f in "$VID_SRC"/*; do [ -f "$f" ] && optimize_video "$f"; done

echo "✓ done"
echo "  originals: $(du -sh "$IMG_SRC" "$VID_SRC" | awk '{s=$1}END{print}' >/dev/null; du -ch "$IMG_SRC" "$VID_SRC" | tail -1 | cut -f1)"
echo "  optimized: $(du -ch "$OUT_IMG" "$OUT_VID" | tail -1 | cut -f1)"
