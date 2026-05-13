## 2025-05-15 - Semantic Buttons for Selection Cards
**Learning:** Using `div` with `cursor-pointer` for interactive elements is a common accessibility trap. Converting them to semantic `<button type="button">` restores keyboard focusability and screen reader interaction.
**Action:** When converting clickable card-like 'div' elements to 'button', include the 'text-left' class to preserve layout alignment, as standard buttons center content by default.
