import * as path from 'path';
import NexusPrismaScalars from 'nexus-prisma/scalars'
import { GraphQLScalarType } from 'graphql'
import { makeSchema, objectType, asNexusMethod, scalarType } from 'nexus'
// import {User} from 'nexus-prisma'

import { GraphQLUUID } from 'graphql-scalars';

const UUID = scalarType({
  ...GraphQLUUID,
  name: "UUID", // You can rename it if you wish
});

import { JSONObjectResolver, DateTimeResolver } from 'graphql-scalars'


import * as Queries from './Queries'
import * as Mutations from "./Mutations/Auth"


const dateTimeScalar = new GraphQLScalarType(DateTimeResolver)
const uuidScaler = new GraphQLScalarType(GraphQLUUID)

export const schema = makeSchema({
  types: [
    NexusPrismaScalars,
    UUID,
    asNexusMethod(dateTimeScalar, 'dateTime'),
    // asNexusMethod(GraphQLUUID, 'uuid'),
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
})
