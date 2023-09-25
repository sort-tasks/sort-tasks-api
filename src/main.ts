
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
// import { createContext } from './context';
import { schema } from './schema';
import {  createContext} from './context';
import { PrismaClient } from '@prisma/client';


// const { PORT = 5000 } = process.env;

// const app = express();

// app.use(cors());

const prisma = new PrismaClient()

const apolloServer = new ApolloServer({
  schema,
})

startStandaloneServer(apolloServer, {
  context: createContext,
}).then(({ url }) => {
  console.log('GraphQL API ready at', url)
})

// const server = createServer(app);

// const apollo = new ApolloServer({
//   schema,
//   context: createContext,
//   tracing: process.env.NODE_ENV === 'development',
//   introspection: process.env.NODE_ENV !== 'production',
//   playground: process.env.NODE_ENV !== 'production',
// });

// apollo.applyMiddleware({ app });

// apollo.installSubscriptionHandlers(server);

// server.listen({ port: PORT }, () => {
//   process.stdout.write(`🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}\n`);
// });
