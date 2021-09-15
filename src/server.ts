import "module-alias/register";
import { setupServer } from "./graphql";
import { setupDb } from "./db/config";
import * as dotenv from "dotenv";

dotenv.config();

setupDb();
setupServer();
