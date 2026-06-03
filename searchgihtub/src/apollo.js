import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { onError } from '@apollo/client/link/error'

 const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (networkError) {
    console.log('Network error:', networkError)
  }

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.log('GraphQL error:', message)
    })
  }
})

 const httpLink=new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  })

export const client = new ApolloClient({
  link:errorLink.concat(httpLink), 
  cache: new InMemoryCache(),
});