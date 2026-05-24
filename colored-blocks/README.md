# React Query API Fetching Demo [live](https://colored-block.netlify.app/)

This project is a small upgrade from a normal Axios fetching app to using React Query for server state management.

Instead of manually creating loading, error, and data states with `useState`, React Query handles them automatically using built-in query states like:

- `isPending`
- `isFetching`
- `isError`
- `data`
- `error`

## What I Learned

- Difference between client state and server state
- How React Query manages async states internally
- Automatic caching and refetching
- Difference between `isPending` and `isFetching`
- Manual fetching using `enabled:false` and `refetch`
- Error handling with `throw error`
- Cleaner API handling compared to manual Axios state management

## Tech Used

- React
- Axios
- @tanstack/react-query
- Tailwind CSS