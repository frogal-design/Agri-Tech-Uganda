## 2026-09-20 - Offline Fallback Data for Interactive UI Mockups
**Learning:** When Supabase is unconfigured or returns an empty dataset, initializing default fallback mock data (`INITIAL_MARKET_PRICES`) prevents dead empty UI states in demo environments and allows interactive features like search filtering to remain functional out of the box.
**Action:** Always provide initial baseline state or fallback datasets for data-driven UI tables when backend connections are optional or unconfigured.
