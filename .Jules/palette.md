# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Synchronized Simulation Feedback Loops
**Learning:** In complex interactive components like the USSD simulator, synchronizing the primary visual mockup with centralized application state is crucial for accessibility and clarity. However, adding a *secondary* feedback loop (like the technical Debug Console logs) significantly reinforces the user's selection and increases the "perceived utility" of the tool, making it feel more like a functional diagnostic utility than a static illustration.
**Action:** When building simulators or configuration tools, always look for opportunities to provide multi-layered feedback (e.g., status header update + technical log entry) to confirm user actions across different visual regions of the interface.
