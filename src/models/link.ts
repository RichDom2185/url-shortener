import { Database } from "bun:sqlite";
import { Maybe } from "../utils/types";

export type Link = {
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

const isOpen = (link: Link): boolean => {
  return link.open_at === null || link.open_at <= Date.now();
};

const isExpired = (link: Link): boolean => {
  return link.close_at !== null && link.close_at <= Date.now();
};

const isProtected = (link: Link): boolean => {
  return link.password !== null;
};

const create = (db: Database, link: Omit<Link, "id">): void => {
  return db
    .prepare(
      "INSERT INTO links (shortlink, link, password, open_at, close_at) VALUES ($shortlink, $link, $password, $open_at, $close_at)"
    )
    .run({
      $shortlink: link.shortlink,
      $link: link.link,
      $password: link.password,
      $open_at: link.open_at,
      $close_at: link.close_at,
    });
};

const Links = {
  getByShortLink,
  exists,
  isOpen,
  isExpired,
  isProtected,
  create,
};

export default Links;
