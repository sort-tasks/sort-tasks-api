import { arg, mutationField, nonNull } from 'nexus';

import { getUserId } from 'utils/utils';

export const TaskActivityCreateMutation = mutationField('taskActivityCreate', {
  type: nonNull('TaskActivity'),
  args: {
    input: nonNull(
      arg({
        type: 'TaskActivityCreateInput',
      }),
    ),
  },
  resolve: async (parent, { input }, ctx) => {
    const user = await getUserId(ctx);
    const { taskId, ...rest } = input;
    return ctx.prisma.taskActivity.create({
      data: {
        ...rest,
        task: { connect: { id: taskId } },
        user: { connect: { id: user.id } },
      },
    });
  },
});
