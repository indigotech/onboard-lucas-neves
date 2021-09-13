import { User } from "../../db/entity";
import { createUser } from "../../domain/create-user";

const resolvers = {
  Query: {
    hello(): string {
      return "Hello, world!";
    },
  },
  Mutation: {
    createUser(_, { data }): Promise<User> {
      const user = createUser(data);
      return user;
    },
  },
};

export default resolvers;
