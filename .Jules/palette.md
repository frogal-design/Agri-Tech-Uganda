# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Accessible Neo-brutalist Selection Patterns
**Learning:** When converting static card-like `div` elements into interactive selection components, using semantic `<button>` tags with `text-left` and `type="button"` ensures both keyboard accessibility and layout consistency. Providing tactile feedback with `active:translate-y-0.5` aligns with the Neo-brutalist aesthetic while offering clear interaction cues.
**Action:** Always prefer semantic `<button>` elements for selection cards and use `aria-pressed` to programmatically communicate the active state to assistive technologies.
