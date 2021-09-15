import { User } from "@db/entity";
import { createUser } from "@domain/create-user";
import { emailValidation } from "@domain/email-validation";
import { passwordValidation } from "@domain/password-validation";

const resolvers = {
  Query: {
    hello(): string {
      return "Hello, world!";
    },
  },
  Mutation: {
    async createUser(_, { data }): Promise<User> {
      if (passwordValidation(data.password)) {
        throw new Error("Senha Fraca");
      }
      if (await emailValidation(data.email)) {
        throw new Error("Email inválido!");
      }
      return createUser(data);
    },
  },
};

export default resolvers;

export class CustomError extends Error {
  code: number;
  additionalInfo?: string;

  constructor(
    message: string,
    name: string,
    code: number,
    additionalInfo: string
  ) {
    super(message);
    super(name);
    this.code = code;
    this.additionalInfo = additionalInfo;
  }
}
