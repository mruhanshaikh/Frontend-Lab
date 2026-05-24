# MotionUI Shared Layout Animation [Live](https://tabindicator.netlify.app/)

A modern responsive React UI built with Framer Motion to practice shared layout animations using `layoutId`.

## Features

- Shared layout underline animation
- Smooth tab transitions
- Hover animations
- Responsive hero section
- Glassmorphism UI
- Motion-based interactions
- Interactive card effects

## Concepts Practiced

- `layoutId`
- shared layout animations
- conditional rendering
- hover animations
- `whileHover`
- `whileTap`
- React state handling
- smooth visual continuity

## What I Learned

Before using `layoutId`, the underline was instantly jumping between tabs because React was removing and creating elements separately.

Using:

```jsx
layoutId="underline"
```

allowed Framer Motion to visually treat them as the same element and smoothly animate the transition.
