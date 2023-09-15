import { FC } from "hono/jsx";

type Props = {
  shortlink: string;
};

const PasswordForm: FC<Props> = ({ shortlink }) => {
  return (
    <form method="POST" action={`/${shortlink}/unlock`}>
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Unlock</button>
    </form>
  );
};

export default PasswordForm;
