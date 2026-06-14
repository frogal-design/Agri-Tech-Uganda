# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Interactive USSD Simulation & Semantic Selection
**Learning:** Transforming static "initialization" steps into interactive simulations (like language selection) significantly improves user engagement and understanding of the USSD flow. Replacing static `div` elements with semantic `button` tags and adding `aria-pressed` ensures these interactive steps are accessible and provide clear state feedback.
**Action:** Always identify static preview elements that can be made interactive with minimal state, and ensure selection groups use semantic buttons with proper ARIA attributes.
