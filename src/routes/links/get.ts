import { Context } from "hono";
import Links, { Link } from "../../models/link";

export const handleRead = (link: Link) => async (c: Context) => {
  if (!Links.isOpen(link)) {
    return c.text("Link is not open yet"); // TODO:
  } else if (Links.isExpired(link)) {
    return c.text("Link has expired"); // TODO:
  } else if (Links.isProtected(link)) {
    return c.text("Link is protected"); // TODO:
  } else {
    return c.redirect(link.link);
  }
};
