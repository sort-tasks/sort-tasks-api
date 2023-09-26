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
    t.field(Task.isCompleted);
    t.field(Task.createdAt);
    t.field(Task.updatedAt);
    t.field('category', {
      type: 'CategorySingleResult',
      resolve: async (parent, args, ctx) => {
        const data = await ctx.prisma.category.findUnique({ where: { id: parent.categoryId } });

        return { data };
      },
    });
  },
});

export const TaskListResult = objectType({
  name: 'TaskListResult',
  definition(t) {
    t.list.field('data', { type: 'Task' });
    t.field('pagination', { type: 'Pagination' });
  },
});
