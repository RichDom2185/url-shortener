import { Database } from "bun:sqlite";
import { Maybe } from "../utils/types";

export type Link = {
  id: number;
  shortlink: string;
  link: string;
  private: number;
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

const create = (db: Database, link: Omit<Link, "id">): void => {
  return db
    .prepare(
      "INSERT INTO links (shortlink, link, private, password, open_at, close_at) VALUES ($shortlink, $link, $private, $password, $open_at, $close_at)"
    )
    .run({
      $shortlink: link.shortlink,
      $link: link.link,
      $private: link.private,
      $password: link.password,
      $open_at: link.open_at,
      $close_at: link.close_at,
    });
};

const Links = {
  getByShortLink,
  exists,
  create,
};

export default Links;
