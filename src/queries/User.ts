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
    t.field('tasks', {
      type: 'TaskListResult',
      resolve: async (parent, args, ctx) => {
        const data = await ctx.prisma.task.findMany({
          where: { userId: parent.id },
        });
        const totalItems = await ctx.prisma.task.count({ where: { userId: parent.id } });

        return {
          data,
          pagination: {
            totalItems,
          },
        };
      },
    });
    t.field('categories', {
      type: 'CategoryListResult',
      resolve: async (parent, args, ctx) => {
        const data = await ctx.prisma.category.findMany({
          where: { userId: parent.id },
        });
        const totalItems = await ctx.prisma.category.count({ where: { userId: parent.id } });

        return {
          data,
          pagination: {
            totalItems,
          },
        };
      },
    });
  },
});

export const meQuery = queryField('me', {
  type: 'User',
  resolve: async (parent, args, ctx) => {
    const user = await getUserId(ctx);
    return user;
  },
});
