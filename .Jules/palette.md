## 2026-09-02 - Simulator Language Selection Accessibility & Visual State Sync
**Learning:** Decorative configuration panels in simulator interfaces often use styled `div`s, making them invisible to keyboard and screen-reader users and unresponsive to user actions.
**Action:** Always replace mock visual choices with semantic `<button>` tags using `aria-pressed`, explicit `aria-label`s, visible `focus-visible` outline rings, and sync the selected state directly with the main simulator preview UI.
