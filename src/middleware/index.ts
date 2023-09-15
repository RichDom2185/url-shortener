import { Hono } from "hono";
import { logger } from "hono/logger";
import { databaseMiddleware } from "./db";
import { REDIRECT_KEY, redirectMiddleware } from "./redirect";

const setupMiddleware = (r: Hono) => {
  r.use("*", logger());
  r.use("*", databaseMiddleware);
  r.use(`/:${REDIRECT_KEY}`, redirectMiddleware());
};

export default setupMiddleware;
