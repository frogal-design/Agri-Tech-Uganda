## 2026-05-08 - Accessible Filter Pill Groups with Contextual Empty States
**Learning:** Filter button groups in dashboard listing views require explicit `aria-pressed` attributes and a semantic `section` or `nav` wrapper (`aria-label`) so screen reader users understand toggle state. When filtering leads to zero items, showing a tailored message indicating the active filter term alongside a quick reset button ("Show All Listings") prevents user disorientation.
**Action:** When creating client-side category filters, bind `aria-pressed` to active state and pair with contextual empty-state CTAs.
