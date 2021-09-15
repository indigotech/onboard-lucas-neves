import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "onboard_test",
  password: "onboard_test",
  database: "onboard_test",
  migrations: ["src/db/migrations/*{.ts,.js}"],
  entities: [__dirname + "src/db/entity/*.entity{.ts,.js}"],
  cli: {
    migrationsDir: "src/db/migrations",
  },
};

export = config;
