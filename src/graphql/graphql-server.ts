import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import typeDefs from "./module/hello/hello.type";
import resolvers from "../graphql/module/hello/hello.resolver";

export async function setupServer() {
  const server = new ApolloServer({ resolvers, typeDefs });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}
