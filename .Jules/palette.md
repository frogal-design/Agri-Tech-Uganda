# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-03-24 - Accessible Language Selection & Localized Simulation
**Learning:** Converting static informational "cards" (implemented as `div`s) into interactive `button` elements significantly improves keyboard accessibility. Using `aria-pressed` programmatically communicates the active selection state to screen readers, while the `text-left` utility is essential to prevent the default button text-centering from breaking card-like layouts. Syncing the localized content of a simulator (like USSD) with the primary language selector provides a "full-stack" localized experience that feels more polished and inclusive.
**Action:** Always prefer `<button type="button">` over clickable `div`s for selection lists. Use `aria-pressed` for toggles and ensure localized strings are mapped centrally for consistency across different UI regions (main app vs. mockup/simulator).
