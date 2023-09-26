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

export const CategoryResult = objectType({
  name: 'CategoryResult',
  definition(t) {
    t.field('data', { type: 'Category' });
  },
});

export const CategoriesResult = objectType({
  name: 'CategoriesResult',
  definition(t) {
    t.list.field('data', { type: 'Category' });
    t.field('pagination', { type: 'Pagination' });
  },
});
