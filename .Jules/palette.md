# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-07-07 - [Interactive Simulator Feedback Loops]
**Learning:** In simulations or complex interactive components (e.g., the USSD simulator), synchronize the visual mockup with centralized application state to provide immediate feedback that reinforces the utility of selected settings. Users perceive higher value and "delight" when their configuration choices (like language) are instantly reflected in both primary visualizations (the terminal) and secondary logs (the debug console).
**Action:** Use centralized state and lookup maps (e.g., `Record<Language, string>`) to drive localized feedback in UI mockups, ensuring user choices in configuration panels are instantly reflected in the primary visualization.
