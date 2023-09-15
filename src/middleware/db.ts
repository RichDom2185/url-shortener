import { Database } from "bun:sqlite";
import { Context, MiddlewareHandler } from "hono";
import { getDatabase } from "../utils/db";

const DB_CONTEXT_KEY = "db_context";

export const databaseMiddleware: MiddlewareHandler = async (c, next) => {
  const db = getDatabase();
  injectDatabaseToContext(c, db);
  await next();
};

const injectDatabaseToContext = (c: Context, db: Database) => {
  c.set(DB_CONTEXT_KEY, db);
};

export const getDatabaseFromContext = (c: Context): Database => {
  const db = c.get(DB_CONTEXT_KEY);
  if (!db) {
    throw new Error("Database not found in context");
  }
  return db;
};
