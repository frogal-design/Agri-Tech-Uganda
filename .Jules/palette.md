## 2025-03-24 - Interactive Technical Mockups
**Learning:** In simulators or complex interactive components (e.g., the USSD simulator), synchronizing the visual mockup with centralized application state provides immediate feedback that reinforces the utility of selected settings. Secondary feedback loops (like technical logs or status headers) further increase 'perceived utility' and user delight.
**Action:** Use centralized state and lookup maps to drive localized feedback in UI mockups, ensuring user choices in configuration panels are instantly reflected in the primary visualization.

## 2025-03-24 - Accessibility in Technical Simulators
**Learning:** Interactive technical feedback regions in simulators, such as the USSD Debug Console, should use `role='log'` and `aria-live='polite'` to ensure asynchronous updates are accessible to assistive technologies. For state-switching buttons (like language selection), using `aria-pressed` communicates the active selection clearly to screen readers.
**Action:** Always apply semantic ARIA roles and live regions to dynamic technical feedback areas, and use `aria-pressed` for selection-based toggles in simulators.
