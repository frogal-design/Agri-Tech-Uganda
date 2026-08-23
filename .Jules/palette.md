## 2025-05-21 - Accessible Simulator Option Buttons
**Learning:** In interactive UI simulators, using static `<div>`s for language or config options prevents keyboard accessibility and screen reader feedback.
**Action:** Replace option cards with semantic `<button>` elements utilizing `aria-pressed` state and `focus-visible` ring styles while synchronizing state updates with mock terminal headers.
