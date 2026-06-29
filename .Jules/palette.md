# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Synchronized Simulation Feedback
**Learning:** In simulator-style UIs (like the USSD mockup), synchronizing the visual display with both centralized state and a secondary "technical" feedback loop (e.g., a Debug Console) significantly increases the perceived utility and realism of the interaction. Users feel more confident in the system's responsiveness when they see "under-the-hood" logs reacting to their inputs.
**Action:** Always implement a secondary feedback loop (logs, status headers) in complex simulations to reinforce user selections and provide immediate visual confirmation.

## 2025-05-14 - Semantic Selection Buttons
**Learning:** Using semantic `<button>` elements for complex "selection cards" instead of `<div>` elements with click handlers immediately solves keyboard navigation and provides better screen reader context through `aria-pressed`. This avoids the need for manual `tabIndex` or `onKeyDown` management.
**Action:** Prioritize semantic `<button>` tags for any clickable selection element, even when the design uses a complex "card" layout.
