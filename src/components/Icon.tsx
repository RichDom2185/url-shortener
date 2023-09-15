import { FC } from "hono/jsx";

type Props = {
  icon: string;
  inline?: boolean;
  color?: string;
  leading?: boolean;
  trailing?: boolean;
};

const Icon: FC<Props> = ({
  icon,
  inline = false,
  color,
  leading = false,
  trailing = false,
}) => {
  const props = {
    icon,
    inline: inline || undefined,
    style: {
      color: color || undefined,
      marginLeft: leading ? "-0.25em" : undefined,
      marginRight: trailing ? "-0.25em" : undefined,
    },
  };
  return <iconify-icon {...props}></iconify-icon>;
};

export default Icon;
