## 2025-03-24 - Semantic Buttons for Selection
**Learning:** Using `<div>` for clickable elements like selection cards fails keyboard accessibility and doesn't provide standard button behaviors. Converting them to semantic `<button>` elements with `type="button"` and `aria-pressed` ensures they are discoverable and their state is programmatically communicated to assistive technologies.
**Action:** Always use semantic `<button>` tags for interactive selection cards and include `aria-pressed` for state.

## 2025-03-24 - Tactile Feedback in Neo-brutalist Design
**Learning:** In a high-contrast, bold design system (Neo-brutalist), static interactions can feel "dead". Applying active transforms like `active:translate-y-0.5` provides immediate tactile feedback that complements the heavy borders and shadows.
**Action:** Use micro-transforms (e.g., `active:translate-y-0.5`) on buttons to enhance the "physical" feel of the UI.
