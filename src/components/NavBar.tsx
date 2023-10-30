import { html } from "hono/html";
import { FC } from "hono/jsx";
import { SITE_REPOSITORY, SITE_TITLE } from "../utils/constants";
import Icon from "./Icon";
import Link from "./Link";

const NavBar: FC = () => {
  return (
    <nav
      id="site-nav"
      class="container-fluid"
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "var(--background-color)",
      }}
    >
      {html`<script>
        window.addEventListener("scroll", () => {
          const nav = document.getElementById("site-nav");
          if (nav) {
            nav.style.borderBottom =
              window.scrollY > 0
                ? "1px solid var(--muted-border-color)"
                : "none";
          }
        });
      </script>`}
      <ul>
        <li>
          <Link to="/" class="contrast">
            <Icon
              inline
              icon="line-md:arrow-right-circle-twotone"
              color="#0284c7"
            />
            &nbsp;
            <strong>{SITE_TITLE}</strong>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href={SITE_REPOSITORY}
            class="contrast"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            data-tooltip="GitHub"
            data-placement="left"
          >
            {/* Inline even though no text, to line up with
                other navbar components */}
            <Icon inline icon="octicon:mark-github-16" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
