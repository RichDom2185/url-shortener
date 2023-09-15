import { Context } from "hono";
import { Link } from "../../models/link";
import ChallengePage from "../../pages/ChallengePage";
import { getLinkStatus } from "../../utils/link";

export const handleRead = (link: Link) => async (c: Context) => {
  const { isBlocked, blockReason } = getLinkStatus(link);
  if (!isBlocked) {
    return c.redirect(link.link);
  }
  return c.html(<ChallengePage link={link} reason={blockReason!} />);
};
