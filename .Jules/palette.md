## 2025-05-15 - [Accessibility & Semantic Markup Refinement]
**Learning:** For interactive cards containing both a title and a descriptive subtext (e.g., Language Selectors), converting them to semantic `<button>` elements improves keyboard accessibility. To maintain valid HTML, use `<span>` with the `block` class instead of `<p>` for nested multi-line text. Additionally, omitting `aria-label` in these cases allows screen readers to announce the full content of the card naturally.
**Action:** Use `<button type="button">` with nested `<span> block` elements and avoid `aria-label` when internal text is self-descriptive.

## 2025-05-15 - [Global Focus Indicators for Neo-brutalism]
**Learning:** Standard focus rings often disappear in high-contrast "Neo-brutalist" themes with thick black borders. A custom global `:focus-visible` style with a thick black outline and offset (e.g., `outline-[3px] outline-black outline-offset-2`) ensures focus is always unmistakable without breaking the aesthetic.
**Action:** Define a robust global `:focus-visible` style in the base CSS layer to override default or missing focus states.
