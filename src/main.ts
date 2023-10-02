import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';

import { Context, createContext } from './context';
import { schema } from './schema';

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<Context>({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function main() {
  await server.start();

  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json({ limit: '50mb' }),
    expressMiddleware(server, {
      context: createContext,
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen(4000, '0.0.0.0', resolve));
  console.log('🚀 Server ready at http://localhost:4000/');
}

main();
