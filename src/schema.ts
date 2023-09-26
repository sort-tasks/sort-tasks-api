import { GraphQLScalarType } from 'graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { DateTimeResolver } from 'graphql-scalars';
import { asNexusMethod, makeSchema, scalarType } from 'nexus';
import NexusPrismaScalars from 'nexus-prisma/scalars';
import * as path from 'path';

import * as Mutations from './Mutations';
import * as Queries from './Queries';
import * as inputs from './inputs';
import * as tasks from './types';

const UUID = scalarType({
  ...GraphQLUUID,
  name: 'UUID', // You can rename it if you wish
  sourceType: 'string',
});

const dateTimeScalar = new GraphQLScalarType(DateTimeResolver);

export const schema = makeSchema({
  types: [
    NexusPrismaScalars,
    UUID,
    asNexusMethod(dateTimeScalar, 'dateTime', 'string | Date'),
    ...Object.values(Queries),
    ...Object.values(Mutations),
    ...Object.values(inputs),
    ...Object.values(tasks),
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
