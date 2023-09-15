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
        <script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"></script>
        <style>
          :root {
            --spacing: 0.5rem;
          }

          .container-fluid,
          .container {
            padding-left: calc(2 * var(--spacing));
            padding-right: calc(2 * var(--spacing));
          }

          body > main {
            --block-spacing-vertical: calc(4 * var(--spacing));
          }

          body > footer {
            --block-spacing-vertical: calc(2.5 * var(--spacing));
          }

          .grid {
            --grid-spacing-horizontal: calc(3 * var(--spacing));
          }

          article {
            --block-spacing-horizontal: calc(3.5 * var(--spacing));
          }

          input {
            --spacing: 1rem;
          }
        </style>
        <title>${pageTitle}</title>
      </head>
      <body>
        ${children}
      </body>
    </html>`;
  return template;
};

export default Page;
