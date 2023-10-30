import { Hono } from "hono";
import { databaseMiddleware } from "./db";
import { loggerMiddleware } from "./logger";

const setupMiddleware = (r: Hono) => {
  r.use("*", loggerMiddleware);
  r.use("*", databaseMiddleware);
};

export default setupMiddleware;
