import { setupServer } from "./graphql";
import { setupDb } from "./db/config";

setupDb();
setupServer();
