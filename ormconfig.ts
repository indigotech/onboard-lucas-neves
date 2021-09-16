import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username: "onboard",
  password: "onboard",
  database: "onboard",
  migrations: ["src/db/migrations/*{.ts,.js}"],
  entities: [
    __dirname + 'src/db/entity/*.entity{.ts,.js}',
  ],
  cli: {
    migrationsDir: 'src/db/migrations',
  }
};
 
export = config;