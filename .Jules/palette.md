# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-03-24 - [Interactive USSD Simulator Feedback]
**Learning:** In simulations or complex interactive components (e.g., the USSD simulator), synchronizing the visual mockup with centralized application state (like language selection) provides immediate feedback that reinforces the utility of selected settings. This creates a "complete" micro-experience where actions have visible consequences.
**Action:** Use centralized state and lookup maps (e.g., `Record<Language, string>`) to drive localized feedback in mockups, ensuring that user choices in configuration panels are instantly reflected in the primary visualization.
