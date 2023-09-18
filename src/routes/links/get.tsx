import { Context } from "hono";
import { getDatabaseFromContext } from "../../middleware/db";
import Links from "../../models/link";
import ChallengePage from "../../pages/ChallengePage";
import { getLinkStatus } from "../../utils/link";
import { PARAM_KEY } from "./types";

export const handleRead = (c: Context) => {
  const shortlink = c.req.param(PARAM_KEY);

  const db = getDatabaseFromContext(c);
  if (!Links.exists(db, shortlink)) {
    c.status(404);
    return c.notFound();
  }

  const link = Links.getByShortLink(db, shortlink);
  if (link === null) {
    // Should not be the case after the above check
    return c.text("Something went wrong", 500);
  }

  const { isBlocked, blockReason } = getLinkStatus(link);
  if (!isBlocked) {
    return c.redirect(link.link);
  }
  return c.html(<ChallengePage link={link} reason={blockReason!} />);
};
