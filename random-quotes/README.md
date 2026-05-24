# React Query Dynamic Fetch (Quote Explorer) [Live](https://randomm-quotes.netlify.app/)

This project is a small frontend experiment built to understand how **TanStack React Query** manages server state compared to manual Axios state handling.

It started as a normal React + Axios setup where loading, error, and data were managed manually using `useState`. Later, it was upgraded to React Query to simplify async state management.

---

## What Changed

### Before (Manual Axios)
- Separate states for:
  - loading
  - error
  - data
- Manual API calls on button click
- Manual handling of async flow

### After (React Query)
- No manual state management
- Built-in states:
  - `isPending`
  - `isFetching`
  - `isError`
  - `data`
  - `error`
- Automatic caching based on `queryKey`
- Dynamic fetching using changing `quoteid`

---

## Key Concepts Learned

- Difference between `isPending` and `isFetching`
- Query caching based on `queryKey`
- Dynamic queries using state (`quoteid`)
- Fetching data on user interaction
- API response handling with `fetch`
- Error handling with `throw`
- How React Query manages server state internally

---

## Behavior

- Button click triggers new quote fetch
- Each `quoteid` creates a new cache entry
- Loader shows during active request
- Error UI appears on failed requests
- Data updates automatically when fetch completes

---

## Tech Stack

- React
- TanStack React Query
- Fetch API
- Tailwind CSS