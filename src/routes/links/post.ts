import { Context } from "hono";
import Links, { Link } from "../../models/link";
import { getDatabase } from "../../utils/db";

export const handleCreateForm = async (c: Context) => {
  // TODO: Add validation
  const data = await c.req.parseBody();
  // TODO: Inject DB to request context instead
  const db = getDatabase();
  try {
    Links.create(db, data as unknown as Omit<Link, "id">);
  } catch (e: any) {
    return c.text(e, 400);
  }
  return c.text("Short link created!", 201);
};
