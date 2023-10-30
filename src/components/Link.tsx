import { FC, JSXNode } from "hono/jsx";
import { SITE_BASEURL } from "../utils/constants";

type Props = JSXNode["props"] & {
  to: string;
};

const Link: FC<Props> = ({ to, ...props }) => {
  return <a href={`${SITE_BASEURL}${to}`} {...props} />;
};

export default Link;
