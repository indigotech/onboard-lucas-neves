import { gql } from "apollo-server";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    hello: String
  }

  input UserInput {
    name: String
    email: String
    password: String
    birthDate: String
  }

  type User {
    id: ID!
    name: String
    email: String
    birthDate: String
  }

  type Mutation {
    createUser(data: UserInput): User
  }
`;

export default typeDefs;
