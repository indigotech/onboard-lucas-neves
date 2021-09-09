import { createConnection } from "typeorm";

export async function setupDb() {
  console.log("Connecting to database!");

  const connection = await createConnection({
    type: "postgres",
    url: "postgres://onboard:onboard@localhost:5432/onboard",
  });

  console.log("Database connected!");
  return connection;
}
