## Anchor-Based Interactive Navbar
## Live : https://nav-anchor.netlify.app/

A responsive navigation bar built using modern CSS anchor positioning and blend modes.

### Features
- Uses **CSS Anchor Positioning** to dynamically align a foreground highlight with nav items
- Desktop interaction via `:hover`, mobile interaction via `:active` / `:focus-visible`
- Smooth transitions without JavaScript
- Foreground/background color inversion achieved using **`mix-blend-mode`** instead of `z-index`
- Fully responsive and touch-friendly

### Key Learnings
- Anchor properties respond to the element that actually changes state
- `mix-blend-mode` depends on painted backgrounds, not DOM order
- Hover must be guarded for desktop; touch states are required for mobile

### Outcome
A clean, performant navbar interaction that works consistently across desktop and mobile using **pure CSS**.
