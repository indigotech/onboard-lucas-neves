import { User } from "@db/entity";
import { createUser } from "@domain/create-user";
import { emailValidation } from "@domain/email-validation";
import { passwordValidation } from "@domain/password-validation";
import { UserInputError } from "apollo-server";

const resolvers = {
  Query: {
    hello(): string {
      return "Hello, world!";
    },
  },
  Mutation: {
    async createUser(_, { data }): Promise<User> {
      if (passwordValidation(data.password)) {
        throw new UserInputError("Senha Fraca");
      }
      if (await emailValidation(data.email)) {
        throw new UserInputError("Já existe uma conta com esse email!");
      }
      const user = createUser(data);
      return user;
    },
  },
};

export default resolvers;
