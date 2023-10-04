import { inputObjectType, nonNull } from 'nexus';

export const TaskActivityCreateInput = inputObjectType({
  name: 'TaskActivityCreateInput',
  definition(t) {
    t.field('taskId', { type: nonNull('UUID') });
    t.nonNull.string('action');
    t.string('description');
  },
});
