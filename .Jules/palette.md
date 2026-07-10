# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - [Simulator Accessibility & Real-time Feedback]
**Learning:** Visual mockups and simulators (like USSD terminals) require explicit ARIA roles (e.g., `role="textbox"`, `role="log"`) and `aria-live` regions to translate their visual metaphors into accessible experiences. Users benefit significantly from "secondary feedback loops"—synchronizing mock technical logs with primary UI interactions—to reinforce that their actions had the intended system effect.
**Action:** When building interactive mockups, always use `aria-pressed` for mode-switching buttons and ensure that technical feedback areas are marked with `role="log"` and `aria-live="polite"` for screen readers.
