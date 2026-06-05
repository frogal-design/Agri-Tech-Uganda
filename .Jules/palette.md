# Palette's Journal - Critical UX/Accessibility Learnings

## 2024-05-22 - Semantic Buttons for Selection Cards
**Learning:** In Neo-brutalist designs, large cards are often used as selection toggles. Implementing these as `div` elements with click handlers breaks keyboard accessibility. Converting them to `<button>` elements is necessary, but standard button styling (centering) must be overridden with `text-left`. Additionally, nested `<p>` tags are invalid inside buttons and must be replaced with `<span>` (using `block` class for layout) to maintain valid HTML and avoid hydration mismatches.
**Action:** Always use `<button>` for interactive card elements, apply `text-left`, and use `<span>` for block-level text content inside.
