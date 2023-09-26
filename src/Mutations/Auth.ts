import { compare } from 'bcryptjs';
import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { arg, mutationField, nonNull } from 'nexus';

import { APP_SECRET } from 'utils/utils';

export const AuthRegisterMutation = mutationField('authRegister', {
  type: 'String',
  args: {
    input: nonNull(arg({ type: 'AuthRegisterInput' })),
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

export const AuthLoginMutation = mutationField('authLogin', {
  type: 'AuthLoginResult',
  args: {
    input: nonNull(arg({ type: 'AuthLoginInput' })),
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
