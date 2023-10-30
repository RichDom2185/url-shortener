export const SITE_TITLE = "URL Shortener" as const;
export const SITE_REPOSITORY =
  "https://github.com/RichDom2185/url-shortener" as const;
export const SITE_BASEURL = process.env.BASE_URL || "";
// Default to in-memory database
export const DATABASE_URL = process.env.DATABASE_URL || ":memory:";
export const AUTHOR_SITE = "https://richdom2185.github.io" as const;
