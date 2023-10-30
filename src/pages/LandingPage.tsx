import { FC } from "hono/jsx";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import Link from "../components/Link";
import NavBar from "../components/NavBar";
import Page from "../components/Page";

const LandingPage: FC = () => {
  return (
    <Page>
      <NavBar />
      <header class="container">
        <center>
          <h1>Fast, customizable URL shortener.</h1>
          <p>
            <Link to="/new" role="button">
              Create your first short URL&nbsp;
              <Icon inline icon="tabler:arrow-right" trailing />
            </Link>
          </p>
        </center>
      </header>
      <main class="container">
        <div class="grid">
          <div>
            <h3 style={{ fontWeight: 400 }}>
              <Icon icon="fa6-solid:bolt" color="#ffb636" />
              <br />
              It is{" "}
              <strong>
                <em>fast</em>
              </strong>
            </h3>
            <p>
              Powered by the Bun runtime and Hono as the web framework, requests
              are processed at blazing fast speeds.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 400 }}>
              <Icon icon="fa6-solid:paintbrush" color="#c084fc" />
              <br />
              It is{" "}
              <strong>
                <em>customizable</em>
              </strong>
            </h3>
            <p>
              Create your own easy-to-remember links, password-protect them, or
              even set them to automatically open at a specified time.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 400 }}>
              <Icon icon="fa6-solid:unlock-keyhole" color="#22c55e" />
              <br />
              It is{" "}
              <strong>
                <em>secure</em>
              </strong>
            </h3>
            <p>
              Passwords are encrypted and cannot be seen by anyone, even us.
              Once links are deleted<sup>1</sup>, they are permanently gone.
            </p>
            <small>
              <small>
                <sup>1</sup>&nbsp;Links created anonymously are automatically
                deleted after 24 hours. To manually delete or persist links, an
                account is required.
              </small>
            </small>
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export default LandingPage;
