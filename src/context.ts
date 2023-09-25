import { PrismaClient } from '@prisma/client';
import { type IncomingMessage } from 'http';

const prisma = new PrismaClient();

export interface Context {
  req: IncomingMessage;
  prisma: PrismaClient;
}

export async function createContext({ req }: { req: IncomingMessage }): Promise<Context> {
  return {
    req,
    prisma,
  };
}
