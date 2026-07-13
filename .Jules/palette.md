# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Interactive Simulator Accessibility
**Learning:** For mockup-style simulators (like USSD terminals), replacing static display elements with interactive buttons and using `aria-pressed` provides immediate feedback to both visual users and assistive technologies. Using `role="log"` and `aria-live="polite"` on debug/console regions ensures that asynchronous state updates (like logs) are announced correctly.
**Action:** Always prefer semantic buttons over interactive divs in simulator dashboards, and wrap technical log regions in live regions to maintain accessibility parity with the visual state.
