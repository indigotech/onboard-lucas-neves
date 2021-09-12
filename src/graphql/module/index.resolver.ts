import { User } from "../../db/entity";
import { createUser } from "../../domain/create-user";

const resolvers = {
  Query: {
    hello(): string {
      return "Hello, world!";
    },
  },
  Mutation: {
    async createUser(_, { data }): Promise<User> {
      const user = await createUser(data);
      return user;
    },
  },
};

export default resolvers;
