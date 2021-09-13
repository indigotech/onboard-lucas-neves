import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import typeDefs from "./module/index.type";
import resolvers from "./module/index.resolver";

export async function setupServer() {
  const server = new ApolloServer({ resolvers, typeDefs });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}
