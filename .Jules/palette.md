# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Semantic Interactive Cards in Neo-brutalist UI
**Learning:** In high-contrast Neo-brutalist designs, interactive "cards" are often implemented as styled `div` elements with `cursor-pointer`. This breaks keyboard accessibility and screen reader expectations. Using a semantic `<button>` with `text-left` and `aria-pressed` preserves the layout while providing full accessibility.
**Action:** Always convert clickable card-like structures to `<button type="button">` and apply `active:translate-y-0.5` for tactile feedback consistent with the design system's bold borders and shadows.
