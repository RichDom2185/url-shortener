import { MiddlewareHandler } from "hono";
import { logger } from "hono/logger";

export const loggerMiddleware: MiddlewareHandler = logger(
  (message: string, ...rest: string[]) => {
    console.log(new Date().toISOString(), message, ...rest);
  }
);
