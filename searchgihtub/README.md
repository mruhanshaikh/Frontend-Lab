# GitHub User Search — GraphQL + Apollo Client

A React app that searches GitHub users using the GitHub GraphQL API and Apollo Client.

## What this project covers

- Apollo Client setup with `HttpLink` and `InMemoryCache`
- Global error handling with `onError` link
- `useLazyQuery` — query runs on button click, not on mount
- GraphQL variables with `$login: String!`
- Displaying data from `data.user` after query runs

## Project structure

```
src/
├── main.jsx          # wraps app with ApolloProvider
├── apolloClient.js   # Apollo Client setup — httpLink, errorLink, cache
└── App.jsx           # search input, useLazyQuery, display result
```

## Setup

### 1. Install dependencies

```bash
npm install @apollo/client graphql
```

### 2. Create GitHub Personal Access Token

```
GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token
```

Scopes needed: `read:user`

### 3. Add token to `.env`

```
VITE_ACCESS_TOKEN=your_token_here
```

> Never commit `.env` to git. Add it to `.gitignore`.

### 4. Run the app

```bash
npm run dev
```

## How it works

### Apollo Client (`apolloClient.js`)

```js
const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
  }
})
```

`httpLink` connects to GitHub's GraphQL endpoint and sends the token with every request in the `Authorization` header — same as how you'd test it in Postman.

```js
const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (networkError) console.log('Network error:', networkError)
  if (graphQLErrors) graphQLErrors.forEach(({ message }) => console.log('GraphQL error:', message))
})
```

`errorLink` catches all errors globally — network errors (server unreachable) and GraphQL errors (bad query, unauthorized) — in one place instead of handling in every component.

```js
link: errorLink.concat(httpLink)
```

Every request passes through `errorLink` first, then `httpLink`.

### Query (`App.jsx`)

```graphql
query GetUser($login: String!) {
  user(login: $login) {
    login
    name
    bio
    avatarUrl
  }
}
```

`$login` is the variable — declared with type `String!` at the top, passed into `user()` for filtering, and fields inside `{}` are what we get back from the server.

### useLazyQuery

```js
const [getData, { data, loading, error }] = useLazyQuery(GET_USER)
```

`useLazyQuery` is used instead of `useQuery` because the query should only run when the user clicks Search — not automatically on mount. `getData` is called manually on button click with the variable.

### Response shape

GitHub returns:

```json
{
  "data": {
    "user": {
      "login": "torvalds",
      "name": "Linus Torvalds",
      "bio": "...",
      "avatarUrl": "..."
    }
  }
}
```

So in the component `data.user.name`, `data.user.avatarUrl` etc — `data` is the wrapper, `user` is the query name, fields are inside.

## API Reference

GitHub GraphQL endpoint: `https://api.github.com/graphql`

Explore the full schema: [GitHub GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)