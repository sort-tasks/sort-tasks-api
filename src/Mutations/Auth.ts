import { User } from 'nexus-prisma'
import {mutationField, nonNull, arg} from "nexus"
import {inputObjectType, objectType} from "nexus"


export const RegisterInput = inputObjectType({
  name: 'RegisterInput',
  definition(t) {
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('email');
    t.nonNull.string('password');
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
  },
});

export const LoginInput = inputObjectType({
  name: 'LoginInput',
  definition(t) {
    t.nonNull.string('email');
    t.nonNull.string('password');
  },
});

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('user', { type: 'User' });
  },
});



export const registerMutation = mutationField('register', {
  type: 'String',
  args: {
    input: nonNull(arg({ type: "RegisterInput" })),
  },
  resolve: async (_parent, arg, ctx) => {

    return null
  }
})

export const loginMutation = mutationField('login', {
  type: 'AuthPayload',
  args: {
    input: nonNull(arg({ type: "LoginInput" })),
  },
  resolve: async (_parent, arg, ctx) => {

    return null
  }
})
