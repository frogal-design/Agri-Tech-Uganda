## 2026-10-06 - Controlled Search Filtering for Data Tables
**Learning:** Market data tables benefit significantly from live inline search filters with an accessible clear button (`X`) and contextual empty state feedback when queries match no items.
**Action:** When adding search inputs to data tables or lists, always bind controlled query state, provide explicit `aria-label`s on the input and clear button, and handle zero-match results gracefully.
