import { objectType } from 'nexus';
import { Category } from 'nexus-prisma';

export const CategoryType = objectType({
  name: Category.$name,
  description: Category.$description,
  definition(t) {
    t.field('id', { type: 'UUID' });
    t.field(Category.name);
    t.field(Category.createdAt);
    t.field(Category.updatedAt);
  },
});

export const CategorySingleResult = objectType({
  name: 'CategorySingleResult',
  definition(t) {
    t.field('data', { type: 'Category' });
  },
});

export const CategoryListResult = objectType({
  name: 'CategoryListResult',
  definition(t) {
    t.list.field('data', { type: 'Category' });
    t.field('pagination', { type: 'Pagination' });
  },
});
