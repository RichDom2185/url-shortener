import { Hono } from "hono";
import { logger } from "hono/logger";
import { databaseMiddleware } from "./db";

const setupMiddleware = (r: Hono) => {
  r.use("*", logger());
  r.use("*", databaseMiddleware);
};

export default setupMiddleware;
