# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Interactive Simulator Synchronization
**Learning:** In simulations or complex interactive components (e.g., the USSD simulator), synchronizing the visual mockup with centralized application state (like language selection) provides immediate, high-fidelity feedback that reinforces the utility of selected settings. Converting static selection cards to semantic `<button>` elements with `aria-pressed` ensures these interactions are both tactilely satisfying and programmatically accessible.
**Action:** Always seek to connect configuration/initialization steps directly to their visual outcomes in mockups or previews to create a "live" feel, and use proper ARIA attributes for selection states.
