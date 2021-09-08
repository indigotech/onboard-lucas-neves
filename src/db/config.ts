import { createConnection } from "typeorm";

export async function setupDb() {
  console.log("Connecting to database!");

  await createConnection({
    type: "postgres",
    url: "postgres://onboard:onboard@localhost:5432/onboard",
  });

  console.log("Database connected!");
}
