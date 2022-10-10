import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  // local server url:
  uri: "http://localhost:4000",
})

const authLink = setContext(async (_, { headers }) => {
  //   const token = await myToken()
  return {
    headers: {
      ...headers,
      //   authorization: token ? `Bearer ${token}` : "",
    },
  }
})

export const apolloClient = new ApolloClient({
  name: "demo-todo",
  version: "0.0.0",
  link: authLink.concat(httpLink),
  connectToDevTools: true, // review
  credentials: "include", // review
  // Pagination:
  // https://www.apollographql.com/docs/react/pagination/core-api
  cache: new InMemoryCache({}),
})
