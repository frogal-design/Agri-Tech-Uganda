## 2026-08-24 - Interactive Simulator State & Screen Reader Synchronization

**Learning:** Static mockups or decorative configuration options in interactive simulator tools (e.g., language selection options) create user confusion and accessibility gaps if they are rendered as non-interactive `<div>`s without `aria-pressed` attributes or real-time visual feedback on the simulator screen.
**Action:** Always refactor mockup selection controls into semantic `<button>`s with `aria-pressed`, explicit focus-visible styles, and link them to reactive state so user choices immediately update simulator previews in real time.
