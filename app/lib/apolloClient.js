// apolloClient.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'https://bihqharjyezzxhsghell.supabase.co/graphql/v1', // Replace with your Supabase GraphQL endpoint
    headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpaHFoYXJqeWV6enhoc2doZWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NzM0MjMsImV4cCI6MjA0MTU0OTQyM30.7W7Vpd7fol3UWLUFLqUiHty2hdTrD-H3-4LT78wveFk', // Replace with your Supabase API key
        'Authorization': `kVwASxU08Rx/abId9dL7XQNXqmBQiY4si99hOQ22jOxXzAdfbB6zIHmFhWQlOM5HRTqgf5S5rugg7W9gbJ8oYA==`, // If you have JWT token for authentication
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;
