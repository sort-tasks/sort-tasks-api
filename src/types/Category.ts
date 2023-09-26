import { nonNull, objectType } from 'nexus';
import { Category } from 'nexus-prisma';

export const CategoryType = objectType({
  name: Category.$name,
  description: Category.$description,
  definition(t) {
    t.field('id', { type: nonNull('UUID') });
    t.field(Category.name);
    t.field(Category.description);
    t.field(Category.ordering);
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
    t.list.field('data', { type: nonNull('Category') });
    t.field('pagination', { type: nonNull('Pagination') });
  },
});
