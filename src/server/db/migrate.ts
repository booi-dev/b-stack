import { migrate } from "drizzle-orm/postgres-js/migrator";

import { db, pool } from ".";

const setup = async () => {
  await migrate(db, { migrationsFolder: "./src/db" });
  await pool.end();
};

setup();
