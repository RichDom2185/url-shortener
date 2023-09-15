import { html } from "hono/html";
import { FC } from "hono/jsx";
import { SITE_TITLE } from "../utils/constants";

type Props = {
  title?: string;
};

const Page: FC<Props> = ({ title, children }) => {
  const pageTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
  const template = html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
        />
        <title>${pageTitle}</title>
      </head>
      <body>
        ${children}
      </body>
    </html>`;
  return template;
};

export default Page;
