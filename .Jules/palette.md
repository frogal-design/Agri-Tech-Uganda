## 2025-05-18 - Interactive Category Filter ARIA Accessibility
**Learning:** Filter buttons in custom design systems (such as Neo-brutalist button rows) often lack `aria-pressed` states and dynamic visual feedback, making them inaccessible to screen readers and unresponsive to clicks.
**Action:** Always wrap filter button groups in labeled `<section>` containers with `aria-label`, bind click handlers to filter state, and set `aria-pressed={isActive}` on active filter buttons.
