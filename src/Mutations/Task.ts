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

export const TaskUpdateInput = mutationField('updateOneTask', {
  type: nonNull('Task'),
  args: {
    id: nonNull(arg({ type: 'UUID' })),
    input: nonNull(arg({ type: 'TaskUpdateInput' })),
  },
  resolve: async (parent, { id, input }, ctx) => {
    const user = await getUserId(ctx);
    const { categoryId, ...rest } = input;
    return ctx.prisma.task.update({
      where: { id },
      data: {
        ...rest,
        category: { connect: { id: categoryId } },
        user: { connect: { id: user.id } },
      },
    });
  },
});

export const TaskDeleteOneMutation = mutationField('deleteOneTask', {
  type: nonNull('Task'),
  args: {
    id: nonNull(arg({ type: 'UUID' })),
  },
  resolve: async (parent, { id }, ctx) => {
    const user = await getUserId(ctx);
    return ctx.prisma.task.delete({ where: { id, userId: user.id } });
  },
});
