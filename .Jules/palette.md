# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-06-11 - Accessible Neo-brutalist Selection Cards
**Learning:** In Neo-brutalist UIs, interactive "cards" should be implemented as semantic `<button>` elements rather than `<div>`. To maintain the "card" look, they require `text-left` (to override button centering) and `active:translate-y-0.5` for tactile feedback consistent with the design system. `aria-pressed` should be used for selection state instead of just visual classes.
**Action:** When converting clickable cards to buttons, apply `text-left`, `type="button"`, and `aria-pressed`. Use `active:translate-y-x` transforms to reinforce the physical, "brutal" feel of the UI during interaction.
