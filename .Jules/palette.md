# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-06-15 - USSD Localization and Accessibility Patterns
**Learning:** In highly interactive components like the USSD simulator, static mockups are missed opportunities for engagement. Converting static selection `div`s to semantic `button`s with `aria-pressed` and `active:translate-y-0.5` not only improves accessibility but also makes the simulator feel like a real tool. Furthermore, synchronizing the terminal header with localized states provides immediate, meaningful feedback to the user.
**Action:** Always look for static "selection" mockups and convert them to interactive, accessible components. Use `aria-current="page"` on bottom navigation to ground the user's location within the SPA.
