import { FC } from "hono/jsx";
import NavBar from "../components/NavBar";
import Page from "../components/Page";

const NotFound: FC = () => {
  return (
    <Page title="Not Found">
      <NavBar />
      <header class="container">
        <hgroup>
          <h1>404 Not Found</h1>
          <p>
            Hmm&hellip; I can't seem to find what you're looking for.&nbsp;
            <a href="/">Back to home.</a>
          </p>
        </hgroup>
      </header>
    </Page>
  );
};

export default NotFound;
