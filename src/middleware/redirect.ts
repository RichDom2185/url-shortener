import { MiddlewareHandler } from "hono";
import Links from "../../models/link";
import { getDatabase } from "../../utils/db";

export const REDIRECT_KEY = "shortlink";

export const redirectMiddleware: () => MiddlewareHandler = () => (c, next) => {
  const link = c.req.param(REDIRECT_KEY);
  const db = getDatabase();
  if (!Links.exists(db, link)) {
    return next();
  }
  return Promise.resolve(c.text("Something went wrong"));
};
