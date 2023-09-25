import { User, } from 'nexus-prisma'
import {queryField} from "nexus"
import {objectType} from "nexus"

export const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
      t.field(User.id)
      t.field(User.email)
      t.field(User.firstName)
      t.field(User.lastName)
      t.field(User.createdAt)
      t.field(User.updatedAt)
  },
})


export const meQuery = queryField('me', {
  type: 'User',
  resolve: async (parent, args, ctx) => {
      return null
  },
});
