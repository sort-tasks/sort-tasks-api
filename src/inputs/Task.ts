import { inputObjectType } from 'nexus';

export const TaskCreateInput = inputObjectType({
  name: 'TaskCreateInput',
  definition(t) {
    t.nonNull.string('name');
    t.string('description');
    t.field('categoryId', { type: 'UUID' });
    t.boolean('isCompleted');
  },
});
