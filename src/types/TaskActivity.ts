import { nonNull, objectType } from 'nexus';
import { TaskActivity } from 'nexus-prisma';

export const TaskActivityType = objectType({
  name: TaskActivity.$name,
  description: TaskActivity.$description,
  definition(t) {
    t.field('id', { type: nonNull('UUID') });
    t.field(TaskActivity.action);
    t.field(TaskActivity.before);
    t.field(TaskActivity.after);
    t.field(TaskActivity.description);
    t.field(TaskActivity.createdAt);
    t.field(TaskActivity.updatedAt);
  },
});

export const TaskActivityListResult = objectType({
  name: 'TaskActivityListResult',
  definition(t) {
    t.list.field('data', { type: nonNull('TaskActivity') });
  },
});
