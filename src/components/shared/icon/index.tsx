import React from "react";

// icon library
import * as Icons from '../../../assets/icons';

interface Match {
  [key: string]: JSX.Element;
}

type IconType = keyof Match;

interface Props {
  icon: IconType;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon = (({ icon, ...props }: Props) => {
  // icon match by query
  const match: Match = {
    menu: <Icons.Menu {...props} />,
    home: <Icons.Home {...props} />,
    product: <Icons.Product {...props} />,
    profile: <Icons.Profile {...props} />,
    offer: <Icons.Offer {...props} />,
    about: <Icons.About {...props} />,
    chevron_up: <Icons.ChevronUp {...props} />,
    chevron_down: <Icons.ChevronDown {...props} />,
    search: <Icons.Search {...props} />,
    send: <Icons.Send {...props} />,
    service: <Icons.Service {...props} />,
    star: <Icons.Star {...props} />,
    back: <Icons.BackIcon {...props} />,
    create: <Icons.Create {...props} />,
    edit: <Icons.Edit {...props} />,
    list: <Icons.List {...props} />,
  };

  if (!match[icon]) return null;
  return <span className="icon">{match[icon]}</span>;
});

export default Icon;
