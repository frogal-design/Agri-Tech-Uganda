## 2026-10-22 - Interactive Filtering & Clear Pattern for Search Inputs
**Learning:** Decorative or static search inputs in data tables frustrate users who expect real-time feedback. Providing an explicit `aria-label`, a clear button (`X`), and contextual empty state text when search yields 0 results greatly enhances accessibility and perceived responsiveness.
**Action:** Always bind input elements to local state, include explicit `aria-label`s, offer an accessible clear button when a query is present, and render informative empty states for search queries.
