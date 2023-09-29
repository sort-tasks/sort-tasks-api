import { nonNull, queryField } from 'nexus';

import { getUserId } from 'utils/utils';

export const OrderedTasksByCategory = queryField('orderedTasksByCategory', {
  type: nonNull('TaskListResult'),
  resolve: async (_parent, _args, ctx) => {
    const user = await getUserId(ctx);

    const data = await ctx.prisma.task.findMany({
      include: {
        category: true,
      },
      where: {
        userId: user.id,
      },
      orderBy: [
        {
          category: {
            ordering: 'asc',
          },
        },
        {
          createdAt: 'asc',
        },
      ],
    });

    const sortedData = [...data].sort((a, b) => {
      const aHasDueAt = !!a.dueAt;
      const bHasDueAt = !!b.dueAt;

      if (aHasDueAt && bHasDueAt) {
        return new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime();
      }

      if (aHasDueAt && !bHasDueAt) {
        return -1;
      }

      if (!aHasDueAt && bHasDueAt) {
        return 1;
      }

      if (a.category.ordering === b.category.ordering) {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }

      return a.category.ordering - b.category.ordering;
    });

    const pagination = {
      totalItems: await ctx.prisma.task.count({
        where: {
          userId: user.id,
        },
      }),
    };

    return { data: sortedData, pagination };
  },
});

export const TaskFindManyQuery = queryField('findManyTask', {
  type: nonNull('TaskListResult'),
  args: {
    // where: 'TaskWhereInput',
    // orderBy: list(arg({ type: 'TaskOrderByInput' })),
    // cursor: 'TaskWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve: async (_parent, args, ctx) => {
    const userId = await getUserId(ctx);

    // let where: NexusGenInputs['OperationWhereInput'] | null = {};

    // if (args?.where?.name?.contains) {
    //   where = {
    //     ...args.where,
    //     name: {
    //       contains: args.where.name.contains,
    //       mode: 'insensitive',
    //     },
    //   };
    // }

    const data = await ctx.prisma.task.findMany({
      ...args,
      where: {
        // ...args.where,
        // ...where,
        userId: userId.id,
      },
    });

    const pagination = {
      totalItems: await ctx.prisma.task.count({
        where: {
          // ...where,
          userId: userId.id,
        },
      }),
    };

    return { data, pagination };
  },
});
