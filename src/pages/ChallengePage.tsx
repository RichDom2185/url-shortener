import { html } from "hono/html";
import { FC } from "hono/jsx";
import NavBar from "../components/NavBar";
import Page from "../components/Page";
import NotOpenChallenge from "../components/links/NotOpenChallenge";
import PasswordChallenge from "../components/links/PasswordChallenge";
import { Link } from "../models/link";
import { BlockReason } from "../utils/link";

type Props = {
  link: Link;
  reason: string;
};

const getHeader = (reason: string) => {
  switch (reason) {
    case BlockReason.Expired:
      return "Sorry!";
    default:
      return html`Hang on&hellip;`;
  }
};

const getChallengeComponent = (blockReason: string): FC<{ link: Link }> => {
  switch (blockReason) {
    case BlockReason.Expired:
      return () => html``;
    case BlockReason.NotOpen:
      return NotOpenChallenge;
    case BlockReason.Password:
      return PasswordChallenge;
    default:
      return () => html``;
  }
};

// TODO: Refactor. Logic is all over the place
const ChallengePage: FC<Props> = ({ link, reason }) => {
  const ChallengeComponent = getChallengeComponent(reason);
  return (
    <Page>
      <NavBar />
      <header class="container">
        <hgroup>
          <h1>{getHeader(reason)}</h1>
          <p>{reason}</p>
        </hgroup>
      </header>
      <main class="container">
        <ChallengeComponent link={link} />
      </main>
    </Page>
  );
};

export default ChallengePage;
