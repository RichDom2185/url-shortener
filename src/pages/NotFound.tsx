import { FC } from "hono/jsx";
import Footer from "../components/Footer";
import Link from "../components/Link";
import NavBar from "../components/NavBar";
import Page from "../components/Page";

const NotFound: FC = () => {
  return (
    <Page title="Not Found">
      <NavBar />
      <main class="container">
        <hgroup>
          <h1>404 Not Found</h1>
          <p>
            Hmm&hellip; I can't seem to find what you're looking for.&nbsp;
            <Link to="/">Back to home.</Link>
          </p>
        </hgroup>
      </main>
      <Footer />
    </Page>
  );
};

export default NotFound;
