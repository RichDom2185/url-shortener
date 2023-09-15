import { FC } from "hono/jsx";

type Props = {
  icon: string;
  inline?: boolean;
  color?: string;
};

const Icon: FC<Props> = ({ icon, inline = false, color }) => {
  const props = {
    icon,
    inline: inline || undefined,
    style: color ? { color: color } : undefined,
  };
  return <iconify-icon {...props}></iconify-icon>;
};

export default Icon;
