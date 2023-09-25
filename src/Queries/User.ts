import { queryField } from 'nexus';
import { objectType } from 'nexus';
import { User } from 'nexus-prisma';

import { getUserId } from 'utils/utils';

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field('id', { type: 'UUID' });
    t.field(User.email);
    t.field(User.firstName);
    t.field(User.lastName);
    t.field(User.createdAt);
    t.field(User.updatedAt);
  },
});

export const meQuery = queryField('me', {
  type: 'User',
  resolve: async (parent, args, ctx) => {
    const user = await getUserId(ctx);
    return user;
  },
});
