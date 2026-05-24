# API Dashboard [Live](https://multiapi-dashboard.netlify.app/)

A responsive bento-grid dashboard built with React and TanStack Query, consuming multiple real-world APIs.
---

## Tech Stack
React · TanStack Query · Tailwind CSS · Vite

## APIs
- **WeatherAPI** — live weather + location-based clock via geolocation
- **GitHub API** — real total user count with staleTime caching
- **News API** — featured trending content
- **Notifications API** — live alerts

## Key Concepts
- Conditional querying with `enabled` — waits for geolocation before firing
- Query cache reuse — Weather and DateTime share one network request
- `staleTime` — prevents over-fetching on window focus
- Guard clause pattern — handles geo errors, loading, and API errors separately
- Separated `QueryOptions/` — config changed once, reflects everywhere
```