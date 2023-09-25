import { compare } from 'bcryptjs';
import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { APP_SECRET } from '../utils/utils';
import { mutationField, nonNull, arg } from 'nexus';
import { inputObjectType, objectType } from 'nexus';

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
    input: nonNull(arg({ type: 'RegisterInput' })),
  },
  resolve: async (_parent, { input: { password, email, firstName, lastName } }, ctx) => {
    const hashedPassword = await hash(password, 10);

    const foundEmail = await ctx.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (foundEmail) {
      throw new Error('Email has been found');
    }

    await ctx.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        hasVerifiedEmail: true,
      },
    });

    return 'OK';
  },
});

export const loginMutation = mutationField('login', {
  type: 'AuthPayload',
  args: {
    input: nonNull(arg({ type: 'LoginInput' })),
  },
  resolve: async (_parent, { input: { email, password } }, ctx) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error(`Email not found`);
    }

    const passwordValid = await compare(password, user.password);

    if (!passwordValid) {
      throw new Error('Invalid password');
    }

    if (!user.hasVerifiedEmail) {
      throw new Error('Email has not been confirmed');
    }

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
});
