import { Context } from "hono";
import { getDatabaseFromContext } from "../../middleware/db";
import Links, { Link } from "../../models/link";

export const handleCreateForm = async (c: Context) => {
  // TODO: Add validation
  const data = await c.req.parseBody();
  const db = getDatabaseFromContext(c);
  const linkData = data as unknown as Omit<Link, "id">;
  linkData.password = linkData.password
    ? Bun.password.hashSync(linkData.password)
    : null;
  try {
    Links.create(db, linkData);
  } catch (e: any) {
    return c.text(e, 400);
  }
  return c.text("Short link created!", 201);
};

export const handleUnlockForm = async (c: Context) => {
  // TODO: Add validation
  const { password } = await c.req.parseBody();
  const shortlink = c.req.param("shortlink");
  const db = getDatabaseFromContext(c);
  const link = Links.getByShortLink(db, shortlink);
  if (!link) {
    return c.notFound();
  }
  if (!link.password) {
    return c.redirect(`/${shortlink}`);
  }
  if (typeof password !== "string") {
    return c.text("Incorrect format", 422);
  }
  if (!Bun.password.verifySync(password, link.password)) {
    return c.text("Incorrect password", 403);
  }
  return c.redirect(link.link);
};
