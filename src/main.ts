import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { schema } from './schema';
import {  createContext} from './context';
import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient()

const apolloServer = new ApolloServer({
  schema,
})

startStandaloneServer(apolloServer, {
  context: createContext,
}).then(({ url }) => {
  console.log('GraphQL API ready at', url)
})
