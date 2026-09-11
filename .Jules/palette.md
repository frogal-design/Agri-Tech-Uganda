## 2026-09-11 - Semantic Buttons and Immediate State Feedback in UI Simulators

**Learning:** Static decorative mockups (such as language selector cards in simulator panels) lack keyboard navigation and screen reader support when built with standard `div`s. Converting them to `<button>` elements with `aria-pressed` attributes and synchronizing them with localized mock state provides immediate visual feedback and improves accessibility.
**Action:** Always wrap interactive choices in semantic `<button type="button">` tags with explicit `aria-pressed` or `aria-selected` attributes and `focus-visible` ring indicators, ensuring selection state directly updates simulated UI displays.
