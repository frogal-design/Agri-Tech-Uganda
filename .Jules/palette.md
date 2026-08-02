## 2025-02-18 - Synchronizing USSD Simulators with Centralized State

**Learning:** When building simulator-style UI elements (like a mobile terminal or USSD mock screen), users have a high expectation of tactile and visual feedback. Making language options actual keyboard-accessible `<button>` elements with `aria-pressed` states, and synchronizing their clicks with the screen mock and real-time debug log outputs (utilizing `role="log"` and `aria-live="polite"`), significantly elevates the user's comprehension and confidence. Conversely, static visual mockups without corresponding state change synchronization lead to friction and confusion.

**Action:** Always map mock visualizations to actual UI/state management, employ native HTML elements instead of non-navigable `div` elements, and provide assistive properties (`aria-pressed` and `aria-hidden` on cursors) to ensure simulator mockups are fully inclusive and visually delightful.
