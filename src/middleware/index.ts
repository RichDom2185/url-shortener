import { Hono } from "hono";
import { logger } from "hono/logger";

const setupMiddleware = (r: Hono) => {
  r.use("*", logger());
};

export default setupMiddleware;
