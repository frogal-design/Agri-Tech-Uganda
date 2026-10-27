## 2025-02-27 - Dynamic USSD Language Selector & Visual Feedback
**Learning:** In interactive simulation tools (like the USSD terminal simulator), converting static mockup elements (e.g. language selection cards) into interactive `<button>` elements with `aria-pressed` state and syncing them directly to the simulator state provides high accessibility and strong visual feedback.
**Action:** Always use `<button>` tags with explicit `aria-pressed` attributes for language/state selectors, and ensure selecting an option immediately reflects in the visual preview context.
