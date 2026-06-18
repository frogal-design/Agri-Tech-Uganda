# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Accessible Selection Cards in USSD Simulator
**Learning:** In Neo-brutalist designs, large cards often act as buttons but are implemented as `div` tags. Converting these to semantic `button` elements with `type="button"` and `aria-pressed` significantly improves keyboard navigation and screen reader support without breaking the aesthetic.
**Action:** Always check for interactive `div` elements in high-contrast layouts and replace them with semantic buttons, ensuring they use `text-left` to maintain layout consistency.
