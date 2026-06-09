
## 2025-05-22 - Interactive USSD Localization & Accessibility
**Learning:** Interactive selection cards must use semantic <button> tags rather than <div> to ensure keyboard accessibility. When these cards function as state toggles (like language selection), the 'aria-pressed' attribute should be used to programmatically communicate the active state. Additionally, synchronizing the simulator's mockup header with the selected language provides immediate, delightful feedback that reinforces the utility of the feature.
**Action:** Always prefer <button type="button"> for clickable UI elements and use 'aria-pressed' for selection states. Synchronize mockup text with state-driven localization to enhance interactivity.
