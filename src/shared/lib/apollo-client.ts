import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'https://graphql.datocms.com/',
    headers: {
      authorization: import.meta.env.VITE_DATOCMS_API_TOKEN ? `Bearer ${import.meta.env.VITE_DATOCMS_API_TOKEN}` : '',
      'Content-Type': 'application/json',
    },
    fetchOptions: {
      mode: 'cors',
      credentials: 'omit',
    },
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first',
    },
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first',
    },
  },
})
