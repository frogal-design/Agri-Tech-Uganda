## 2025-05-15 - [Bottom Navigation Accessibility & Focus States]
**Learning:** In a Neo-brutalist design system with custom input styles and `focus:ring-0`, standard focus indicators are often lost. A global `focus-visible` override is necessary to ensure keyboard accessibility. Additionally, `aria-current="page"` is essential for screen readers to identify the active section in a single-page navigation layout.
**Action:** Always implement a high-contrast focus indicator that works with the brand's aesthetic and use `aria-current` for navigation states.
