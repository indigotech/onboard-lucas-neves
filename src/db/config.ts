import { createConnection } from "typeorm";
import * as path from "path";

export async function setupDb() {
  console.log("Connecting to database!");

  const connection = await createConnection({
    type: "postgres",
    url: process.env.DB_URL,
    entities: [path.join(__dirname, "entity", "index.{ts,js}")],
  });

  console.log("Database connected!");
  return connection;
}
