import * as path from 'path';
import NexusPrismaScalars from 'nexus-prisma/scalars';
import { GraphQLScalarType } from 'graphql';
import { makeSchema, asNexusMethod, scalarType } from 'nexus';

import { GraphQLUUID } from 'graphql-scalars';

const UUID = scalarType({
  ...GraphQLUUID,
  name: 'UUID', // You can rename it if you wish
});

import { DateTimeResolver } from 'graphql-scalars';

import * as Queries from './Queries';
import * as Mutations from './Mutations/Auth';

const dateTimeScalar = new GraphQLScalarType(DateTimeResolver);

export const schema = makeSchema({
  types: [
    NexusPrismaScalars,
    UUID,
    asNexusMethod(dateTimeScalar, 'dateTime'),
    ...Object.values(Queries),
    ...Object.values(Mutations),
  ],
  outputs: {
    schema: path.join(__dirname, './../schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
  contextType: {
    module: path.join(__dirname, './context.ts'),
    alias: 'Context',
    export: 'Context',
  },
});
