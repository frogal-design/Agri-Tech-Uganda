## 2025-05-15 - Global Focus Visibility in Neo-brutalist Design
**Learning:** In design systems with heavy black borders (Neo-brutalist), default browser focus rings often blend in or are obscured by existing component borders. A global `focus-visible` style with an `outline-offset` is essential to ensure keyboard accessibility remains distinct from the UI's aesthetic.
**Action:** Always implement a high-visibility global `focus-visible` style (e.g., `outline-[3px] outline-black outline-offset-2`) at the base layer of the CSS to guarantee accessibility across all interactive elements.

## 2025-05-15 - Actionable Empty States
**Learning:** Passive empty states (e.g., "No data found") miss an opportunity to guide the user. Adding a primary CTA that mirrors the main action of the page reduces friction and clarifies the next steps for new users.
**Action:** When implementing an empty state, always include a relevant CTA button (e.g., "Post the first ad") that triggers the same primary action as the rest of the interface.
