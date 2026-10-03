## 2025-05-18 - Controlled Search Input with Accessible Clear Button

**Learning:** Uncontrolled or visual-only search inputs in tables frustrate users when filtering fails or when clearing requires backspacing; providing an explicit `aria-label`, a clear (`X`) button with `aria-label="Clear market search"`, and dynamic empty-state feedback improves perceived utility and screen-reader context.
**Action:** Always wire search inputs as controlled state with dedicated `aria-label`s, clear buttons, and contextual empty state messages when results are empty.
