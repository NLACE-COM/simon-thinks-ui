---
name: simon-thinks-design
description: Use this skill to generate well-branded interfaces and assets for SIMON THINKS, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files
(`styles.css`, `tokens/`, `components/`, `guidelines/`, `assets/`).

SIMON THINKS is a cognitive organizational system (B2B): "Turn Knowledge into
Decisions." Guiding principle: **claridad gráfica = claridad conceptual** —
minimalism, economy of form, a modular node language. Palette: violet `#9D50FF`
+ blue `#002ADD` + ink `#0F0E14` / light `#F6F6F6` / white. Fonts: Figtree (primary), Schibsted Grotesk display (substitute for
Neue Montreal), JetBrains Mono. Icons: Lucide (stroke). No emoji, no gradients.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out
of `assets/` and create static HTML files for the user to view — link `styles.css`
for tokens/fonts. If working on production code, copy assets and read the rules here
to become an expert in designing with this brand; mount components from
`window.SIMONTHINKSDesignSystem_ae45ac` after loading the compiled bundle.

If the user invokes this skill without other guidance, ask what they want to build,
ask a few clarifying questions, then act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
