import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`,
    cache: new InMemoryCache(),
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_CONTENT_DELIVERY_ACCESS_TOKEN}`
    }
});
