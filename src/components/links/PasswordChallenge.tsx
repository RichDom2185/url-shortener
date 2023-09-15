import { FC } from "hono/jsx";
import { Link } from "../../models/link";
import Icon from "../Icon";
import PasswordForm from "./PasswordForm";

type Props = {
  link: Link;
};

const PasswordChallenge: FC<Props> = ({ link }) => {
  return (
    <article style={{ marginTop: 0, marginBottom: 0 }}>
      <hgroup>
        <h1 style={{ display: "inline" }}>
          <Icon inline icon="ic:round-password" />
        </h1>
        <h3>Enter the password below:</h3>
      </hgroup>
      <PasswordForm shortlink={link.shortlink} />
    </article>
  );
};

export default PasswordChallenge;
