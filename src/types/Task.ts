import { objectType } from 'nexus';
import { Task } from 'nexus-prisma';

export const TaskType = objectType({
  name: Task.$name,
  description: Task.$description,
  definition(t) {
    t.field('id', { type: 'UUID' });
    t.field(Task.name);
    t.field('categoryId', { type: 'UUID' });
    t.field(Task.description);
    t.field(Task.createdAt);
    t.field(Task.updatedAt);
  },
});
