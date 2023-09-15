import { Database } from "bun:sqlite";
import { Maybe } from "../utils/types";

type Link = {
  id: number;
  shortlink: string;
  link: string;
  password: Maybe<string>;
  open_at: Maybe<number>;
  close_at: Maybe<number>;
};

const getByShortLink = (db: Database, shortlink: string): Maybe<Link> => {
  return db.query("SELECT * FROM links WHERE shortlink = $shortlink").get({
    $shortlink: shortlink,
  }) as any;
};

const exists = (db: Database, shortlink: string): boolean => {
  return getByShortLink(db, shortlink) !== null;
};

const Links = {
  getByShortLink,
  exists,
};

export default Links;
