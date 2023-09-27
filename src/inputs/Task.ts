import { inputObjectType } from 'nexus';

export const TaskCreateInput = inputObjectType({
  name: 'TaskCreateInput',
  definition(t) {
    t.nonNull.string('title');
    t.string('description');
    t.nonNull.field('categoryId', { type: 'UUID' });
    t.boolean('isCompleted');
    t.dateTime('completedAt');
    t.dateTime('dueAt');
  },
});

export const TaskUpdateInput = inputObjectType({
  name: 'TaskUpdateInput',
  definition(t) {
    t.nonNull.string('title');
    t.string('description');
    t.nonNull.field('categoryId', { type: 'UUID' });
    t.boolean('isCompleted');
    t.dateTime('completedAt');
    t.dateTime('dueAt');
  },
});
