import { FC } from "hono/jsx";
import Icon from "../components/Icon";
import NavBar from "../components/NavBar";
import Page from "../components/Page";

const ComingSoon: FC = () => {
  return (
    <Page title="Coming Soon">
      <NavBar />
      <header class="container">
        <hgroup>
          <h1>
            <Icon icon="twemoji:construction" />
          </h1>
          <h1>Construction ahead!</h1>
          <p>This page is still under construction. Please come back later.</p>
        </hgroup>
        <p>
          <a href="#" role="button" class="secondary" onclick="history.back();">
            Take me back to where I came from!
          </a>
        </p>
      </header>
    </Page>
  );
};

export default ComingSoon;
