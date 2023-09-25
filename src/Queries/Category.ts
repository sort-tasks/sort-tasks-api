import { nonNull, queryField } from 'nexus';

import { getUserId } from 'utils/utils';

export const CategoryFindManyQuery = queryField('findManyCategory', {
  type: nonNull('CategoriesResult'),
  args: {
    // where: 'CategoryWhereInput',
    // orderBy: list(arg({ type: 'CategoryOrderByInput' })),
    // cursor: 'CategoryWhereUniqueInput',
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

    const data = await ctx.prisma.category.findMany({
      ...args,
      where: {
        // ...args.where,
        // ...where,
        userId: userId.id,
      },
    });

    const pagination = {
      totalItems: await ctx.prisma.category.count({
        where: {
          // ...where,
          userId: userId.id,
        },
      }),
    };

    return { data, pagination };
  },
});
