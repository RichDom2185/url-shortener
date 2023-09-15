import { Database } from "bun:sqlite";
import { Maybe } from "./types";

let db: Maybe<Database> = null;

const createDatabase = () => {
  db = new Database(":memory:");
};

const MIGRATIONS: readonly string[] = [
  `CREATE TABLE IF NOT EXISTS "links" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "shortlink" TEXT NOT NULL UNIQUE,
    "link" TEXT NOT NULL,
    "password" TEXT,
    "open_at" INTEGER,
    "close_at" INTEGER
  )`,
];

const migrateDatabase = () => {
  if (db == null) {
    throw new Error("Database not initialized");
  }
  for (const migration of MIGRATIONS) {
    db.run(migration);
  }
};

export const getDatabase = (): Database => {
  if (db === null) {
    createDatabase();
    migrateDatabase();
  }
  return db!;
};
