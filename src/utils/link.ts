import { Link } from "../models/link";

const isOpen = (link: Link): boolean => {
  return link.open_at === null || link.open_at <= Date.now();
};

const isExpired = (link: Link): boolean => {
  return link.close_at !== null && link.close_at <= Date.now();
};

const isProtected = (link: Link): boolean => {
  return link.password !== null;
};

export const BlockReason = {
  NotOpen: "This link is not yet open!",
  Expired: "This link has expired.",
  Password: "You need a password to access this link.",
};

export const getLinkStatus = (
  link: Link
): {
  isBlocked: boolean;
  blockReason: string | null;
} => {
  const isBlocked = !isOpen(link) || isExpired(link) || isProtected(link);
  const blockReason = !isBlocked
    ? null
    : !isOpen(link)
    ? BlockReason.NotOpen
    : isExpired(link)
    ? BlockReason.Expired
    : BlockReason.Password;
  return {
    isBlocked,
    blockReason,
  };
};
