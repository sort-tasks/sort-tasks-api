import { nonNull, objectType } from 'nexus';
import { Task } from 'nexus-prisma';

export const TaskType = objectType({
  name: Task.$name,
  description: Task.$description,
  definition(t) {
    t.field('id', { type: nonNull('UUID') });
    t.field(Task.title);
    t.field('categoryId', { type: nonNull('UUID') });
    t.field(Task.description);
    t.field(Task.isCompleted);
    t.field(Task.completedAt);
    t.field(Task.dueAt);
    t.field(Task.createdAt);
    t.field(Task.updatedAt);
    t.field('category', {
      type: nonNull('CategorySingleResult'),
      resolve: async (parent, args, ctx) => {
        const data = await ctx.prisma.category.findUnique({ where: { id: parent.categoryId } });

        return { data };
      },
    });
    t.field('activity', {
      type: nonNull('TaskActivityListResult'),
      resolve: async (parent, args, ctx) => {
        const data = await ctx.prisma.taskActivity.findMany({
          where: { taskId: parent.id },
          orderBy: { createdAt: 'desc' },
        });

        return { data };
      },
    });
  },
});

export const TaskListResult = objectType({
  name: 'TaskListResult',
  definition(t) {
    t.list.field('data', { type: nonNull('Task') });
    t.field('pagination', { type: nonNull('Pagination') });
  },
});
