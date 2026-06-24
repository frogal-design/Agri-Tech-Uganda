# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Semantic Buttons for Selection Cards
**Learning:** Using semantic `<button>` elements instead of `<div>` for interactive selection cards (like language selectors) is essential for keyboard accessibility. Combining these with `aria-pressed` provides clear state communication to assistive technologies, while visual states like `bg-accent` and `active:translate-y-0.5` provide tactile feedback for sighted users.
**Action:** Always prefer `<button>` for clickable items and use `aria-pressed` for toggle/selection states within a group.

## 2025-05-15 - Synchronized Simulation Mockups
**Learning:** In USSD or terminal simulations, synchronizing the visual mockup with centralized application state (like `selectedLanguage`) provides immediate, realistic feedback that reinforces the utility of the feature being tested.
**Action:** Connect simulation components to shared state to ensure localized headers and debug logs update in real-time alongside user selections.
