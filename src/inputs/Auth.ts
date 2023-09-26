import { inputObjectType } from 'nexus';

export const AuthRegisterInput = inputObjectType({
  name: 'AuthRegisterInput',
  definition(t) {
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('email');
    t.nonNull.string('password');
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
  },
});

export const AuthLoginInput = inputObjectType({
  name: 'AuthLoginInput',
  definition(t) {
    t.nonNull.string('email');
    t.nonNull.string('password');
  },
});
