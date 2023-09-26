import { arg, mutationField, nonNull } from 'nexus';

import { getUserId } from 'utils/utils';

export const CategoryCreateMutation = mutationField('categoryCreate', {
  type: nonNull('Category'),
  args: {
    input: nonNull(
      arg({
        type: 'CategoryCreateInput',
      }),
    ),
  },
  resolve: async (parent, { input }, ctx) => {
    const user = await getUserId(ctx);

    return ctx.prisma.category.create({
      data: {
        ...input,
        user: { connect: { id: user.id } },
      },
    });
  },
});
