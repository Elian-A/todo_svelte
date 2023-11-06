import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as schema from "./schema";


// For migration
const migrationClient = postgres("postgresql://root@localhost:5432/todo", {max:1})
migrate(drizzle(migrationClient), {migrationsFolder: "./migration"})

const queryClient = postgres("postgresql://root@localhost:5432/todo")
export const db = drizzle(queryClient, {schema});
