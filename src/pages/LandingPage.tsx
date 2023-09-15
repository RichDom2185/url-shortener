import { FC } from "hono/jsx";
import Icon from "../components/Icon";
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
            <a href="/new" role="button">
              Create your first short URL&nbsp;
              <Icon inline icon="tabler:arrow-right" trailing />
            </a>
          </p>
        </center>
      </header>
      <main class="container">
        <div class="grid">
          <div>
            <Icon icon="fa6-solid:bolt" color="#ffb636" />
            <h4>
              It's <em>fast</em>
            </h4>
            <p>
              Powered by the Bun runtime and Hono as the web framework, requests
              are processed at blazing fast speeds.
            </p>
          </div>
          <div>
            <Icon icon="fa6-solid:paintbrush" color="#c084fc" />
            <h4>
              It's <em>customizable</em>
            </h4>
            <p>
              Create your own easy-to-remember links, password-protect them, or
              even set them to automatically open at a specified time.
            </p>
          </div>
          <div>
            <Icon icon="fa6-solid:unlock-keyhole" color="#22c55e" />
            <h4>
              It's <em>secure</em>
            </h4>
            <p>
              Passwords are encrypted and cannot be seen by anyone, even us.
              Once links are deleted<sup>1</sup>, they are permanently gone.
            </p>
            <small>
              <small>
                <small>
                  <sup>1</sup>&nbsp;Links created anonymously are automatically
                  deleted after 24 hours. To manually delete or persist links,
                  an account is required.
                </small>
              </small>
            </small>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default LandingPage;
