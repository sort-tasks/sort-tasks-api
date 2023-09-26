import { inputObjectType } from 'nexus';

export const CategoryCreateInput = inputObjectType({
  name: 'CategoryCreateInput',
  definition(t) {
    t.nonNull.string('name');
    t.string('description');
    t.nonNull.int('ordering');
  },
});

export const CategoryUpdateInput = inputObjectType({
  name: 'CategoryUpdateInput',
  definition(t) {
    t.nonNull.string('name');
    t.string('description');
    t.nonNull.int('ordering');
  },
});
