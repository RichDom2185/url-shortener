import { FC } from "hono/jsx";
import { SITE_TITLE } from "../utils/constants";
import Icon from "./Icon";

const NavBar: FC = () => {
  return (
    <nav class="container-fluid">
      <ul>
        <li>
          <a href="/" class="contrast">
            <Icon
              inline
              icon="line-md:arrow-right-circle-twotone"
              color="#0284c7"
            />
            &nbsp;
            <strong>{SITE_TITLE}</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
