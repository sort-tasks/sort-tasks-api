import { arg, mutationField, nonNull } from 'nexus';

import { getUserId } from 'utils/utils';

export const TaskCreateOneMutation = mutationField('createOneTask', {
  type: nonNull('Task'),
  args: {
    input: nonNull(
      arg({
        type: 'TaskCreateInput',
      }),
    ),
  },
  resolve: async (parent, { input }, ctx) => {
    const user = await getUserId(ctx);
    const { categoryId, ...rest } = input;
    return ctx.prisma.task.create({
      data: {
        ...rest,
        category: { connect: { id: categoryId } },
        user: { connect: { id: user.id } },
      },
    });
  },
});
