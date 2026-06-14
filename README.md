# Frontend-Lab

50+ frontend projects built across CSS, Vanilla JavaScript, and React — UI experiments, CSS challenges, animation deep-dives, and real API integrations. Every project is deployed and functional.

> This is not a learning dump. Projects range from design-focused UI builds to fully interactive apps with real APIs and state management. For flagship projects see [Devpulse](https://github.com/mruhanshaikh/Devpulse) and [FocusBoard](https://github.com/mruhanshaikh/FocusBoard).

---

## ⭐ Featured

### 1. Multi-API Bento Dashboard
**[Live ↗](https://multiapi-dashboard.netlify.app/)**

Responsive bento-grid dashboard consuming 4 real-world APIs simultaneously. Conditional querying, shared query cache reuse, staleTime caching, and guard clause error handling — no loading flickers.

- **Stack:** React · TanStack Query · Tailwind CSS · Vite
- **APIs:** WeatherAPI (geolocation), GitHub API, News API, Notifications API
- **Highlight:** Weather and DateTime share one network request via query cache reuse

---

### 2. Reels-Style Video Feed
**[Live ↗](https://reeel.netlify.app/)**

Vertical snap-scrolling video feed in pure Vanilla JS — no React, no libraries. Auto play/pause via Intersection Observer, browser audio permission handling, optimised DOM updates with zero full re-renders.

- **Stack:** HTML · SCSS · Vanilla JavaScript
- **Highlight:** Browser autoplay policy handling + event delegation — no framework needed

---

### 3. ShopMemo — React Performance Lab
**[Live ↗](https://shopmemo.netlify.app/)**

Shopping cart built to demonstrate React performance optimisation in a real UI. Every `useMemo`, `useCallback`, and `React.memo` usage is intentional and documented — not cargo-culted.

- **Stack:** React · useMemo · useCallback · React.memo · Tailwind CSS
- **Highlight:** Shows exactly why `React.memo` + `useCallback` must be used together, not separately

---

### 4. E-Commerce Product Viewer
**[Live ↗](https://shoppmee.netlify.app/)**

Scalable product module with dynamic routing, global state via Context API, and real API data. Single source of truth — products fetched once, shared across all routes.

- **Stack:** React · Context API · React Router DOM · Axios · React Toastify · Tailwind CSS
- **Highlight:** Centralised API data via Context eliminates redundant fetches across routes

---

### 5. Scroll-Triggered Landing Page
**[Live ↗](https://scrolllltriggeer.netlify.app/)**

Animated landing page with scroll-triggered reveals, staggered transitions, and reusable directional animation generators via Framer Motion variants.

- **Stack:** React · Framer Motion · CSS Modules
- **Highlight:** Reusable animation variant generators — direction and timing controlled from one config object

---

### 6. Google-Style Pagination
**[Live ↗](https://google-style-pagination.netlify.app/)**

Server-side pagination with TanStack Query — dynamic query keys, skeleton loading, error states, cached page navigation.

- **Stack:** React · TanStack Query · Tailwind CSS · Axios
- **Highlight:** Query-key caching — revisiting a page is instant, zero network request

---

### 7. Infinite Scroll Feed
**[Live ↗](https://infinite-query.netlify.app)**

Infinite scroll using `useInfiniteQuery` and Intersection Observer. Auto-fetches next page on scroll with skeleton loading and proper observer cleanup on unmount.

- **Stack:** React · TanStack Query · Axios · Tailwind CSS
- **Highlight:** Observer cleanup inside `useEffect` return — no memory leaks

---

### 8. Virtual Piano
**[Live ↗](https://virtuallpianoo.netlify.app/)**

Fully playable piano mapped to keyboard keys. Preloaded audio for instant playback, overlapping note support, touch/mobile support — single reusable play function handles everything.

- **Stack:** HTML · CSS · Vanilla JavaScript · Web Audio API
- **Highlight:** One play function handles both keyboard and touch input simultaneously

---

### 9. TanStack Query CRUD — Cards App
**[Live ↗](https://createecards.netlify.app/)**

Full TanStack Query mutation cycle — `useQuery`, `useMutation`, `invalidateQueries` — with real REST API (MockAPI). UI syncs automatically after every create/delete, no page refresh.

- **Stack:** React · TanStack Query v5 · Axios · Tailwind CSS · MockAPI
- **Highlight:** `invalidateQueries` after mutation — cache handles sync, zero manual state updates

---

### 10. Animated Gradient Card
**[Live ↗](https://card-glow-effect.netlify.app/)**

CSS card using `@property` to animate a conic gradient angle — impossible with standard CSS transitions. Hover controls animation play/pause with layered shadow effects.

- **Stack:** CSS · `@keyframes` · `@property`
- **Highlight:** `@property` enables smooth gradient angle animation — animating the custom property, not the background-image

---

### 11. Parent-Driven Hover — CSS `:has()`
**[Live ↗](https://css-hash.netlify.app/)**


Pure CSS interaction — hovering a child scales it up while the parent detects this and scales down all siblings. Zero JavaScript. Demonstrates modern parent-aware CSS selectors.

- **Stack:** Pure CSS · `:has()` · transitions
- **Highlight:** Parent-to-child conditional styling — previously only possible with JavaScript

---

### 12. GitHub User Search
**[Live ↗](https://searchhgithub.netlify.app/)**

A React app that searches GitHub users using the GitHub GraphQL API and Apollo Client..

- **Stack:** React · GraphQL · ApolloClient
- **Highlight:** Apollo Client setup with `HttpLink` and `InMemoryCache``useLazyQuery` — query runs on button click, not on mount

---

### 13. Validate Form
**[Live ↗](https://validateformm.netlify.app/)**

A multi-field registration form built with **React Hook Form** and **Zod** for schema-based validation

- **Stack:** React-Hook-Form · ZOD · Resolver 
- **Highlight:** Demonstrating dynamic field arrays, conditional rendering, live Filtering and cross-field validation

---

## 📋 All Projects

| # | Project | Type | Tech | Live |
|---|---------|------|------|------|
| 01 | Multi-API Bento Dashboard | App | React, TanStack Query, 4 APIs, Vite | [Live ↗](https://multiapi-dashboard.netlify.app/) |
| 02 | Reels-Style Video Feed | App | Vanilla JS, SCSS, Intersection Observer | [Live ↗](https://reeel.netlify.app/) |
| 03 | ShopMemo — Performance Lab | App | React, useMemo, useCallback, React.memo | [Live ↗](https://shopmemo.netlify.app/) |
| 04 | E-Commerce Product Viewer | App | React, Context API, Router, Axios | [Live ↗](https://shoppmee.netlify.app/) |
| 05 | Scroll-Triggered Landing Page | UI | React, Framer Motion, CSS Modules | [Live ↗](https://scrolllltriggeer.netlify.app/) |
| 06 | Google-Style Pagination | App | React, TanStack Query, Axios | [Live ↗](https://google-style-pagination.netlify.app/) |
| 07 | Infinite Scroll Feed | App | React, TanStack Query, Intersection Observer | [Live ↗](https://infinite-query.netlify.app) |
| 08 | Virtual Piano | App | Vanilla JS, Web Audio API | [Live ↗](https://virtuallpianoo.netlify.app/) |
| 09 | TanStack CRUD — Cards App | App | React, TanStack Query v5, MockAPI | [Live ↗](https://createecards.netlify.app/) |
| 10 | Animated Gradient Card | UI | CSS, @property, @keyframes | [Live ↗](https://card-glow-effect.netlify.app/) |
| 11 | Parent-Driven Hover — CSS :has() | UI | Pure CSS, :has(), transitions | [Live ↗](https://css-hash.netlify.app/) |
| 12 | Responsive Studio Website | UI | HTML, SCSS, Grid, Flexbox, clamp() | [Live ↗](https://responsive-studio-website.netlify.app/) |
| 13 | AnimatePresence — Exit Animations | UI | React, Framer Motion | [Live ↗](https://exit-animation.netlify.app/) |
| 14 | Shared Layout Tab Indicator | UI | React, Framer Motion, layoutId | [Live ↗](https://tabindicator.netlify.app/) |
| 15 | Staggered Hero Section | UI | React, Framer Motion, CSS Modules | [Live ↗](https://staggedlanding.netlify.app/) |
| 16 | Interactive Motion Avatar | UI | React, Framer Motion, keyframes, drag | [Live ↗](https://moving-avatar.netlify.app/) |
| 17 | Anchor-Based Navbar | UI | Pure CSS, Anchor Positioning, mix-blend-mode | [Live ↗](https://nav-anchor.netlify.app/) |
| 18 | Matrix Text Reveal | UI | Vanilla JS, setInterval, index-based reveal | [Live ↗](https://matrix-text-revealed.netlify.app/) |
| 19 | Cursor Dot Follower | UI | React, useMotionValue, useSpring | [Live ↗](https://cursordotfolowingeffect.netlify.app/) |
| 20 | Download Progress Effect | UI | Vanilla JS, setInterval, edge cases | [Live ↗](https://downloadnoweffect.netlify.app/) |
| 21 | Spotlight Effect | UI | CSS, radial-gradient, JS mouse events | [Live ↗](https://spotlighhtt.netlify.app/) |
| 22 | Form to Card Generator | App | React, two-way binding, LocalStorage | [Live ↗](https://dynamicprofilebuilder.netlify.app/) |
| 23 | Quote Explorer — React Query | App | React, TanStack Query, dynamic queryKey | [Live ↗](https://randomm-quotes.netlify.app/) |
| 24 | Scroll Progress Bar | UI | React, Framer Motion, useScroll | [Live ↗](https://scrolling-animationn.netlify.app/) |
| 25 | IPL Card Generator | App | Vanilla JS, dynamic data, DOM rendering | [Live ↗](https://ipl-card-generator.netlify.app/) |
| 26 | Instagram Like Effect | UI | Vanilla JS, setInterval, CSS transitions | [Live ↗](https://insta-like-effects.netlify.app/) |
| 27 | User Card — API Fetch | App | Vanilla JS, Fetch API, dynamic rendering | [Live ↗](https://fetchuserdatacard.netlify.app/) |
| 28 | Random Position Generator | App | Vanilla JS, viewport edge case handling | [Live ↗](https://randompositionedquotes.netlify.app/) |
| 29 | React Counter — State & Props | App | React, useState, props, lifting state | [Live ↗](https://countereactstate.netlify.app/) |
| 30 | Hover Expand Card | UI | SCSS, nesting, mixins, hover design | [Live ↗](https://tougen-anki.netlify.app/) |
| 31 | Spring Animation | UI | React, Framer Motion, physics-based motion | [Live ↗](https://springanimation.netlify.app/) |
| 32 | Card FadeUp Animation | UI | React, Framer Motion, keyframe array values | [Live ↗](https://cardfadeup.netlify.app/) |
| 33 | Bento Image Placeholder | UI | CSS, Grid, image placeholder effect | [Live ↗](https://bentoo-imagee.netlify.app/) |
| 34 | React Query Fetching Demo | App | React, TanStack Query, Axios, Tailwind | [Live ↗](https://colored-block.netlify.app/) |
| 35 | Custom PNG Cursor | UI | Vanilla JS, mousemove, CSS transform | [Live ↗](https://move-cursor.netlify.app/) |
| 36 | Dribbble-Inspired UI | UI | HTML, CSS, Flexbox, transitions | [Live ↗](https://dribbble-clonee.netlify.app/) |
| 37 | Apple-Inspired Homepage | UI | HTML, CSS, Flexbox | [Live ↗](https://applle-clonee.netlify.app/) |
| 38 | Business Card UI | UI | HTML, CSS | [Live ↗](https://businesscard-ui.netlify.app/) |
| 39 | Todo List UI | UI | HTML, CSS| [Live ↗](https://todolistt-ui.netlify.app/) |
| 40 | Blog Post UI | UI | HTML, CSS| [Live ↗](https://blogposttui.netlify.app/) |
| 41 | Job Application Form UI | UI | HTML, CSS, pseudoStates | [Live ↗](https://jobapplicationform-ui.netlify.app/) |
| 42 | Hero Section UI | UI | HTML, CSS, Flexbox | [Live ↗](https://herosectionn-ui.netlify.app/) |
| 43 | BeigeSec UI | UI | HTML, CSS, Flexbox | [Live ↗](https://beigesec-ui.netlify.app/) |
| 44 | Random Color Generator| App | HTML, CSS, JS | [Live ↗](https://randomcolorrgeneratorr.netlify.app/) |
| 45 | Debounce & Throttle| Learning | HTML, CSS, JS | [Live ↗](https://debouncethrootle.netlify.app/) |
| 46 | TennisLendigPage | UI | React, Atomic Design | [Live ↗](https://componentdesign.netlify.app/) |
| 47 | Company Cards UI | UI | React, Props | [Live ↗](https://companycardss.netlify.app/) |
| 48 | DynamicNames | Result |React, useEffect | [Live ↗](https://randomnameswithoutevent.netlify.app/) |
| 49 | ListManager | App | React, controlledForm | [Live ↗](https://reactt-formm-handlingg.netlify.app/) |
| 50 | DynamicRouting | App | React, React-Router | [Live ↗](reactroutinggg.netlify.app) |
| 51 | Searchhgithub | App | React, GraphQL, Aplollo-Client | [Live ↗](https://searchhgithub.netlify.app/) |
| 52 | ValidateForm | App | React-Hook-Form, ZOD, Resolver | [Live ↗](https://validateformm.netlify.app/) |

---

## 🛠 Tech Across This Collection

| Category | Technologies |
|----------|-------------|
| Core | HTML5 · CSS3 · JavaScript (ES6+) |
| Styling | SCSS · CSS Modules · Tailwind CSS · CSS-in-JS · UI-Library |
| React | Hooks · Context API · React Router · React-Hook-Form · React.memo · Lazy + Suspense |
| State & Data & Validation | TanStack Query v5 · Zustand · ZOD · ApolloClient · Axios · Fetch API · LocalStorage |
| Animation | Framer Motion · CSS @keyframes · Intersection Observer · useScroll |
| APIs | RESTAPI ·GraphQL · |
| Build & Deploy | Vite · Netlify |

---

## 📁 Structure

Each folder is a self-contained project with its own code and live deployment. Projects with interesting implementation details include individual READMEs. Static UI experiments are best viewed directly via the live link.

---

> For flagship projects → [Devpulse](https://github.com/mruhanshaikh/Devpulse) · [FocusBoard](https://github.com/mruhanshaikh/FocusBoard)