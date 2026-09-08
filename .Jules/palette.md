## 2025-05-18 - Interactive Filter Controls in Neo-Brutalist Design System

**Learning:** Static mock category buttons in high-contrast/Neo-brutalist interfaces frustrate users expecting interactivity. Implementing category filtering with `aria-pressed` states and inverted active styling (`bg-black text-accent`) creates immediate feedback and improves screen reader clarity.
**Action:** Always complement filter state changes with a contextual empty state that includes a direct "Show All" or "Clear Filter" action when no items match.
