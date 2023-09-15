import { FC } from "hono/jsx";
import { Link } from "../../models/link";
import Icon from "../Icon";
import PasswordForm from "./PasswordForm";

type Props = {
  link: Link;
};

const NotOpenChallenge: FC<Props> = ({ link }) => {
  const unblockTime = new Date(link.open_at!);
  return (
    <article style={{ marginTop: 0, marginBottom: 0 }}>
      <hgroup>
        <h1>
          <Icon inline icon="svg-spinners:clock" />
          &nbsp; <small>Patience is a virtue</small>
        </h1>
        <p>
          Please wait until {unblockTime.toLocaleString()}, then reload the
          page.
        </p>
      </hgroup>
      <details>
        <summary>Can't wait?</summary>
        <p>
          If you have the password, you can bypass the wait by entering it
          below:
        </p>
        <PasswordForm shortlink={link.shortlink} />
      </details>
    </article>
  );
};

export default NotOpenChallenge;
