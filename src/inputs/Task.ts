import { inputObjectType } from 'nexus';

export const TaskCreateInput = inputObjectType({
  name: 'TaskCreateInput',
  definition(t) {
    t.nonNull.string('name');
    t.string('description');
    t.nonNull.field('categoryId', { type: 'UUID' });
    t.boolean('isCompleted');
  },
});

export const TaskUpdateInput = inputObjectType({
  name: 'TaskUpdateInput',
  definition(t) {
    t.nonNull.string('name');
    t.string('description');
    t.nonNull.field('categoryId', { type: 'UUID' });
    t.boolean('isCompleted');
  },
});
