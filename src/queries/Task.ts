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

    const currentDate = new Date();
    const sortedData = [...data].sort((a, b) => {
      const aDueInPast = a.dueAt && a.dueAt <= currentDate;
      const bDueInPast = b.dueAt && b.dueAt <= currentDate;

      if (aDueInPast && bDueInPast) {
        return new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime();
      }

      if (aDueInPast && !bDueInPast) {
        return -1;
      }

      if (!aDueInPast && bDueInPast) {
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
          // ...where,
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
