import { nonNull, queryField } from 'nexus';

import { getUserId } from 'utils/utils';

export const TaskFindManyQuery = queryField('findManyTask', {
  type: nonNull('TasksResult'),
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