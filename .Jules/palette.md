## 2025-05-22 - [Global Focus Visibility & Semantic Interactivity]
**Learning:** In design systems with high-contrast, bold borders (like Neo-brutalism), default focus rings can be invisible or clash with the aesthetic. A custom `focus-visible` style is essential for keyboard navigation. Additionally, converting clickable `div` elements to semantic `button` tags is a major accessibility win but requires `text-left` to preserve layout.
**Action:** Always check for clickable `div`s and replace with `button`. Implement a strong, theme-appropriate `focus-visible` outline globally.
