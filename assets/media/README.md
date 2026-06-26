# Media bank — `assets/media/`

Shared image & video library for **any** project built on the SIMON THINKS Design System.
Drop-in stock for heros, backgrounds, social cards, decks, loaders and ambient loops.

```
assets/media/
├── images/        ← 27 high-res originals (.jpg)  ·  Git LFS
├── videos/        ← 16 high-res originals (.mp4)  ·  Git LFS
├── optimized/     ← web-ready, lightweight derivatives  ·  ship these
│   ├── images/    ← <name>-hero.webp · <name>-hero.jpg · <name>-card.webp
│   └── videos/    ← <name>.mp4 (re-encoded) · <name>-poster.jpg
├── optimize.sh    ← regenerates optimized/ from the originals
└── README.md
```

## Originals vs. optimized — pick by use

These assets are **high resolution** (images up to 7680×4320 / 8K, videos with
very high bitrate). Almost no web surface needs that. **Match the asset to the
job** so you never ship more weight than the context requires:

| Use case | Use this |
|----------|----------|
| 4K / print / true full-screen hero | `images/` **original** |
| Web hero, large banner, full-bleed section | `optimized/images/<name>-hero.webp` (≤1600px) |
| Content block, grid card, thumbnail, avatar | `optimized/images/<name>-card.webp` (≤800px) |
| Non-WebP context (email, legacy tooling) | `optimized/images/<name>-hero.jpg` |
| Background / ambient video loop | `optimized/videos/<name>.mp4` |
| Video placeholder / lazy-load / no-autoplay | `optimized/videos/<name>-poster.jpg` |
| Master clip for editing / re-encode source | `videos/` **original** |

**Weight at a glance:** originals **≈206 MB** → optimized **≈40 MB**.
Per asset the win is large, e.g. a 46 MB clip → 3 MB, a 12 MB clip → 0.6 MB,
an 8K still → a 60 KB `-card.webp`.

## How to use

```html
<!-- Responsive still: WebP with JPG fallback, card-sized -->
<picture>
  <source srcset="assets/media/optimized/images/2150439135-card.webp" type="image/webp" />
  <img src="assets/media/optimized/images/2150439135-hero.jpg" alt="" loading="lazy" />
</picture>

<!-- Ambient background loop: light mp4 + poster while it loads -->
<video src="assets/media/optimized/videos/0_Abstract_Iridescent_1280x720.mp4"
       poster="assets/media/optimized/videos/0_Abstract_Iridescent_1280x720-poster.jpg"
       autoplay muted loop playsinline></video>
```

> **Brand fit.** Favor the abstract / iridescent clips and the DeepMind-style
> renders for brand surfaces — they echo the violet-on-ink "imagery" direction
> (see `guidelines/brand-imagery.card.html`). Keep type and UI legible over
> motion with an ink overlay.

## Regenerating the optimized set — `optimize.sh`

Outputs in `optimized/` are **generated**; the originals are the source of truth.
After adding or replacing originals, rebuild (idempotent — only stale outputs
re-run):

```bash
brew install webp ffmpeg     # sips is built into macOS
cd assets/media && ./optimize.sh
```

Tuning lives at the top of `optimize.sh`:
- **Images** → `-hero.webp` (≤1600px, q78) · `-hero.jpg` fallback (q72) · `-card.webp` (≤800px, q74). Never upscales smaller originals.
- **Videos** → H.264 CRF 30, faststart, **audio stripped** (these are background loops) + a poster frame. Raise/lower `VIDEO_CRF` to trade weight for quality.

## Storage — Git LFS

The high-res originals (`images/`, `videos/`) are tracked with **[Git LFS](https://git-lfs.com)**
(see `.gitattributes`). The light `optimized/` derivatives are plain git so they
diff and clone normally.

```bash
git lfs install        # once per machine, before cloning/pulling
git lfs pull           # fetch the actual originals (clones get pointers first)
```

> If a host lacks LFS, the optimized set alone (~40 MB) is enough for most
> projects — the originals can stay on a CDN or be fetched on demand.

## Adding more assets

1. Drop the high-res file into `images/` or `videos/` (auto-tracked by LFS).
2. Run `./optimize.sh` to produce the web derivatives.
3. Keep originals; prefer `.jpg`/`.png` in, H.264 `.mp4` in.
4. Add a row to the inventory below so the bank stays self-documenting.

## Licensing

Third-party stock (Pexels / Getty Images / Google DeepMind and generated
renders). **Verify each asset's license before public or commercial use** —
Getty assets in particular may require a paid license.

---

## Inventory

### Images — `images/` (27)

| File | Original | Notes |
|------|----------|-------|
| `aerial-drone-shot-urban-city-busy-road-intersection.jpg` | 3724×2848 · 10M | Aerial / urban infrastructure |
| `pexels-googledeepmind-17483868.jpg` | 7200×4050 · 1.3M | Abstract AI render |
| `pexels-googledeepmind-17483873.jpg` | 7680×4320 · 1.6M | Abstract AI render |
| `pexels-googledeepmind-17485658.jpg` | 7111×4000 · 964K | Abstract AI render |
| `pexels-googledeepmind-17485708.jpg` | 5000×2812 · 1.1M | Abstract AI render |
| `pexels-googledeepmind-17486102.jpg` | 4000×2250 · 780K | Abstract AI render |
| `pexels-googledeepmind-18069159.jpg` | 4096×4096 · 552K | Abstract AI render |
| `pexels-googledeepmind-18069695.jpg` | 3840×2160 · 432K | Abstract AI render |
| `pexels-googledeepmind-18069696.jpg` | 3840×2160 · 696K | Abstract AI render |
| `pexels-googledeepmind-25626435.jpg` | 7680×4320 · 400K | Abstract AI render |
| `pexels-googledeepmind-25626449.jpg` | 7680×4320 · 876K | Abstract AI render |
| `pexels-googledeepmind-25630340.jpg` | 3840×2160 · 2.1M | Abstract AI render |
| `pexels-googledeepmind-25630342.jpg` | 3840×2160 · 1.9M | Abstract AI render |
| `pexels-googledeepmind-25630344.jpg` | 3840×2160 · 2.6M | Abstract AI render |
| `13790.jpg` | 1500×1200 · 408K | Stock |
| `197753132_10864256.jpg` | 2800×2800 · 672K | Stock |
| `2150439135.jpg` | 1000×1500 · 1.0M | Stock |
| `2151991157.jpg` | 816×1500 · 444K | Stock |
| `2151991177.jpg` | 816×1500 · 812K | Stock |
| `27362.jpg` | 1500×1000 · 912K | Stock |
| `3954.jpg` | 1500×857 · 376K | Stock |
| `417.jpg` | 1014×1500 · 1.2M | Stock |
| `43829.jpg` | 1500×1500 · 1.1M | Stock |
| `5785.jpg` | 1200×1500 · 1.6M | Stock |
| `5817.jpg` | 969×1500 · 928K | Stock |
| `60273.jpg` | 1000×1500 · 588K | Stock |
| `64372.jpg` | 1500×1500 · 1.1M | Stock |

### Videos — `videos/` (16)

| File | Original | Orientation | Notes |
|------|----------|-------------|-------|
| `0_Abstract_Blue_1280x720.mp4` | 1280×720 · 6.2M | 16:9 | Abstract loop |
| `0_Abstract_Colors_1280x720.mp4` | 1280×720 · 6.6M | 16:9 | Abstract loop |
| `0_Abstract_Fluid_1280x720.mp4` | 1280×720 · 6.8M | 16:9 | Abstract loop |
| `0_Abstract_Iridescent_1280x720.mp4` | 1280×720 · 12M | 16:9 | Iridescent — on-brand |
| `0_Network_Nodes_1280x720.mp4` | 1280×720 · 3.0M | 16:9 | Node graph — on-brand |
| `0_Transparent_Sphere_1280x720.mp4` | 1280×720 · 9.6M | 16:9 | Abstract loop |
| `11904046_1280_720_25fps.mp4` | 1280×720 · 46M | 16:9 | Stock footage |
| `11921990_720_1280_30fps.mp4` | 720×1280 · 18M | 9:16 | Vertical / social |
| `11922020_720_1280_15fps.mp4` | 720×1280 · 5.4M | 9:16 | Vertical / social |
| `11922032_720_1280_30fps.mp4` | 720×1280 · 14M | 9:16 | Vertical / social |
| `11922038_720_720_24fps.mp4` | 720×720 · 7.6M | 1:1 | Square / social |
| `11922047_720_1280_24fps.mp4` | 720×1280 · 3.8M | 9:16 | Vertical / social |
| `11922068_720_1280_30fps.mp4` | 720×1280 · 2.8M | 9:16 | Vertical / social |
| `GettyImages-1059020360.mp4` | 1280×720 · 12M | 16:9 | Stock footage (had audio) |
| `GettyImages-1151049989.mp4` | 1280×720 · 9.7M | 16:9 | Stock footage |
| `GettyImages-1277758722.mp4` | 1280×720 · 6.7M | 16:9 | Stock footage (had audio) |
