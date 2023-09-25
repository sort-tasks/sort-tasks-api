import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { createContext } from './context';
import { schema } from './schema';

const apolloServer = new ApolloServer({
  schema,
});

startStandaloneServer(apolloServer, {
  context: createContext,
}).then(({ url }) => {
  console.log('GraphQL API ready at', url);
});
