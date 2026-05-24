# Cards App — TanStack Query Demo [Live](https://createecards.netlify.app/)

A React application built to demonstrate the core concepts of **TanStack Query** — including data fetching, mutations, and cache invalidation — using a real REST API.

---

## What This Project Does

- Fetches cards from a live API on page load
- Allows creating new cards via a POST request
- Allows deleting cards via a DELETE request
- Automatically syncs the UI after every mutation using `invalidateQueries`

---

## Concepts Covered

| Concept | Description |
|---|---|
| `useQuery` | Fetches and caches data automatically on mount |
| `useMutation` | Handles POST and DELETE API calls manually via `.mutate()` |
| `invalidateQueries` | Marks cache as stale and triggers a refetch after mutation |
| Skeleton Loading | Shows placeholder UI while data is loading for the first time |
| `isLoading` vs `isFetching` | `isLoading` for first fetch, `isFetching` for background refetch |

---

## Tech Stack

- **React** — UI
- **TanStack Query v5** — server state management
- **Axios** — HTTP client
- **Tailwind CSS** — styling
- **MockAPI** — real REST API backend

---

## Project Structure

```
src/
├── api/
│   └── cardsApi.js          # Axios API calls (GET, POST, DELETE)
├── hooks/
│   └── useCards.js          # useQuery + useMutation + invalidateQueries
├── components/
│   ├── CardBoard.jsx         # Main page layout and state
│   ├── CardItem.jsx          # Single card component
│   └── CreateCardInput.jsx   # Input and create button
├── App.jsx                   # Root component
└── main.jsx                  # QueryClient setup and providers
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## Key Learning

> In TanStack Query, `useQuery` handles reading data automatically. For writing data (POST, PUT, DELETE), `useMutation` is used and `.mutate()` must be called manually. After any mutation, `invalidateQueries` tells the cache to refetch so the UI stays in sync — without a page refresh.