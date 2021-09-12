import { User } from "../../../db/entity";

const resolvers = {
  Query: {
    hello(): string {
      return "Hello, world!";
    },
  },
  Mutation: {
    createUser(_, { data }): User {
      return { id: 1, ...data };
    },
  },
};

export default resolvers;
