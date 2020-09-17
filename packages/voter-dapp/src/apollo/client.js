import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/umaprotocol/uma-kovan",
  cache: new InMemoryCache()
});
