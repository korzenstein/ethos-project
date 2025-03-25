# Ethos Metrotown Web Experience

An interactive, visually rich, scroll-based web experience built using React, styled-components, and @react-spring/web. The project blends subtle motion, smooth transitions, and parallax effects to showcase the Ethos Metrotown brand.

---

## Tech Stack

- **React** (with TypeScript)
- **Styled-Components**
- **@react-spring/web** – for scroll-triggered animations
- **Zustand** – lightweight global state management
- **IntersectionObserver** – for in-view element detection
- **Web-friendly video and image formats** (e.g., `.webm`, `.webp`)

---

## Structure Overview

- `Components/` – Reusable UI and animation components
- `store/` – Zustand-based state management (`scrollY`, `viewportHeight`, `isNavOpen`, etc.)
- `styles/` – Shared breakpoints, typography, and theme definitions
- `pages/` – Top-level layout components (e.g., `Home`, `Navigation`, `OutOfMany`, etc.)

---

## Key Features

### Scroll-Based SVG Animation (OutOfMany)

- Each letter form animates upward into place as the SVG enters the viewport.
- Color transition from dark to light to simulate elevation/importance.
- Staggered "riseStrength" array gives each shape a unique float-in velocity.

### CanvasSequence

- Preloaded `.webp` frame sequence to simulate smooth canvas animation on scroll.
- Animation begins as the canvas enters the viewport (via `IntersectionObserver`).
- Optimized to reduce unnecessary renders when not visible.

### Image Reveal Component

- Triggered via external props/state (e.g., button click).
- Clip-path animation combined with scale/translate effects on the image.
- Smooth reveal using `cubic-bezier` easing for a "slow-then-fast" effect.

### Responsive Design

- `device` breakpoints handled with styled-components.
- Register button hidden on mobile.
- Alternate padding/margins used across screen sizes.

### Navigation & Scroll Locking

- Zustand stores whether the mobile menu (`isNavOpen`) is toggled.
- Page scrolling is disabled (`document.body.style.overflow = "hidden"`) when the menu is open.
- Fixed `MenuBar` animates in a subtle blur/gradient background when scrolling begins.

---

## Design Decisions & Assumptions

- **Scroll-based animations** are driven by raw `window.scrollY`, stored globally via Zustand.
- **Performance-first:** No heavy libraries (like Framer Motion) were used to avoid bundle bloat.
- All dynamic animations (like `OutOfMany` paths or image reveals) are **purely CSS or spring-based**.
- **Zustand** chosen over React Context or Redux due to simplicity and minimal overhead.
- **Clip-path animation** is done on the parent container for better browser compatibility.

---

## In Progress / Future Improvements

- Enhance mobile experience for OutOfMany and CanvasSequence animations.
- Optimize asset loading for slower connections.
- Add support for prefers-reduced-motion.
- Accessibility pass (ARIA tags, keyboard nav).
- SEO optimization for text content in CTAs and navigation.

---

## Running Locally

```bash
npm install
npm run dev
```
