## 2025-05-15 - Interactive Card Pattern in Neo-brutalism
**Learning:** In this Neo-brutalist system, interactive card-like elements should be semantic `<button>` tags with `text-left`, `aria-pressed` for selection state, and `active:translate-y-0.5` for tactile feedback. This maintains the bold aesthetic while ensuring keyboard accessibility and clear user feedback.
**Action:** Always prefer `<button>` over `<div>` for clickable cards and use `aria-pressed` with `bg-accent` to denote active selection.
