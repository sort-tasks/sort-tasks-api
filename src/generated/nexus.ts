/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./../context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AuthLoginInput: { // input type
    email: string; // String!
    password: string; // String!
  }
  AuthRegisterInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
  }
  CategoryCreateInput: { // input type
    name: string; // String!
  }
  CategoryUpdateInput: { // input type
    name: string; // String!
  }
  TaskCreateInput: { // input type
    categoryId: NexusGenScalars['UUID']; // UUID!
    description?: string | null; // String
    isCompleted?: boolean | null; // Boolean
    name: string; // String!
  }
  TaskUpdateInput: { // input type
    categoryId: NexusGenScalars['UUID']; // UUID!
    description?: string | null; // String
    isCompleted?: boolean | null; // Boolean
    name: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  UUID: any
}

export interface NexusGenObjects {
  AuthLoginResult: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Category: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id?: NexusGenScalars['UUID'] | null; // UUID
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  CategoryListResult: { // root type
    data?: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    pagination?: NexusGenRootTypes['Pagination'] | null; // Pagination
  }
  CategorySingleResult: { // root type
    data?: NexusGenRootTypes['Category'] | null; // Category
  }
  Mutation: {};
  Pagination: { // root type
    totalItems?: number | null; // Int
  }
  Query: {};
  Task: { // root type
    categoryId?: NexusGenScalars['UUID'] | null; // UUID
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id?: NexusGenScalars['UUID'] | null; // UUID
    isCompleted: boolean; // Boolean!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  TaskListResult: { // root type
    data?: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
    pagination?: NexusGenRootTypes['Pagination'] | null; // Pagination
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstName: string; // String!
    id?: NexusGenScalars['UUID'] | null; // UUID
    lastName: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthLoginResult: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Category: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: NexusGenScalars['UUID'] | null; // UUID
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  CategoryListResult: { // field return type
    data: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    pagination: NexusGenRootTypes['Pagination'] | null; // Pagination
  }
  CategorySingleResult: { // field return type
    data: NexusGenRootTypes['Category'] | null; // Category
  }
  Mutation: { // field return type
    authLogin: NexusGenRootTypes['AuthLoginResult'] | null; // AuthLoginResult
    authRegister: string | null; // String
    categoryCreate: NexusGenRootTypes['Category']; // Category!
    taskCreate: NexusGenRootTypes['Task']; // Task!
    taskDelete: NexusGenRootTypes['Task']; // Task!
    taskUpdate: NexusGenRootTypes['Task']; // Task!
  }
  Pagination: { // field return type
    totalItems: number | null; // Int
  }
  Query: { // field return type
    findManyCategory: NexusGenRootTypes['CategoryListResult']; // CategoryListResult!
    findManyTask: NexusGenRootTypes['TaskListResult']; // TaskListResult!
    me: NexusGenRootTypes['User'] | null; // User
  }
  Task: { // field return type
    category: NexusGenRootTypes['CategorySingleResult'] | null; // CategorySingleResult
    categoryId: NexusGenScalars['UUID'] | null; // UUID
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: NexusGenScalars['UUID'] | null; // UUID
    isCompleted: boolean; // Boolean!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  TaskListResult: { // field return type
    data: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
    pagination: NexusGenRootTypes['Pagination'] | null; // Pagination
  }
  User: { // field return type
    categories: NexusGenRootTypes['CategoryListResult'] | null; // CategoryListResult
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstName: string; // String!
    id: NexusGenScalars['UUID'] | null; // UUID
    lastName: string; // String!
    tasks: NexusGenRootTypes['TaskListResult'] | null; // TaskListResult
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  AuthLoginResult: { // field return type name
    token: 'String'
    user: 'User'
  }
  Category: { // field return type name
    createdAt: 'DateTime'
    id: 'UUID'
    name: 'String'
    updatedAt: 'DateTime'
  }
  CategoryListResult: { // field return type name
    data: 'Category'
    pagination: 'Pagination'
  }
  CategorySingleResult: { // field return type name
    data: 'Category'
  }
  Mutation: { // field return type name
    authLogin: 'AuthLoginResult'
    authRegister: 'String'
    categoryCreate: 'Category'
    taskCreate: 'Task'
    taskDelete: 'Task'
    taskUpdate: 'Task'
  }
  Pagination: { // field return type name
    totalItems: 'Int'
  }
  Query: { // field return type name
    findManyCategory: 'CategoryListResult'
    findManyTask: 'TaskListResult'
    me: 'User'
  }
  Task: { // field return type name
    category: 'CategorySingleResult'
    categoryId: 'UUID'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    isCompleted: 'Boolean'
    name: 'String'
    updatedAt: 'DateTime'
  }
  TaskListResult: { // field return type name
    data: 'Task'
    pagination: 'Pagination'
  }
  User: { // field return type name
    categories: 'CategoryListResult'
    createdAt: 'DateTime'
    email: 'String'
    firstName: 'String'
    id: 'UUID'
    lastName: 'String'
    tasks: 'TaskListResult'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    authLogin: { // args
      input: NexusGenInputs['AuthLoginInput']; // AuthLoginInput!
    }
    authRegister: { // args
      input: NexusGenInputs['AuthRegisterInput']; // AuthRegisterInput!
    }
    categoryCreate: { // args
      input: NexusGenInputs['CategoryCreateInput']; // CategoryCreateInput!
    }
    taskCreate: { // args
      input: NexusGenInputs['TaskCreateInput']; // TaskCreateInput!
    }
    taskDelete: { // args
      id: NexusGenScalars['UUID']; // UUID!
    }
    taskUpdate: { // args
      id: NexusGenScalars['UUID']; // UUID!
      input: NexusGenInputs['TaskUpdateInput']; // TaskUpdateInput!
    }
  }
  Query: {
    findManyCategory: { // args
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    findManyTask: { // args
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}