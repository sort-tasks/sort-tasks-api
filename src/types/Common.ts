import { objectType } from 'nexus';

export const Pagination = objectType({
  name: 'Pagination',
  definition(t) {
    t.int('totalItems');
  },
});
