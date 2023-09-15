import { MiddlewareHandler } from "hono";
import Links from "../models/link";
import LinkRoutes from "../routes/links";
import { getDatabase } from "../utils/db";

export const REDIRECT_KEY = "shortlink";

export const redirectMiddleware: () => MiddlewareHandler = () => (c, next) => {
  const link = c.req.param(REDIRECT_KEY);
  const db = getDatabase();
  if (!Links.exists(db, link)) {
    return next();
  }
  const linkData = Links.getByShortLink(db, link);
  if (linkData === null) {
    // Should not be the case after the above check
    return Promise.resolve(c.text("Something went wrong", 500));
  }
  // TODO: Refactor
  return Promise.resolve(LinkRoutes.handleRead(linkData)(c));
};
