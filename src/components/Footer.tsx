import { FC } from "hono/jsx";
import { AUTHOR_SITE } from "../utils/constants";

const Footer: FC = () => {
  return (
    <footer class="container-fluid">
      <center>
        <small>
          <small>
            &copy; 2023&nbsp;
            <a href={AUTHOR_SITE} target="_blank" rel="noopener noreferrer">
              Richard Dominick
            </a>
          </small>
        </small>
      </center>
    </footer>
  );
};

export default Footer;
