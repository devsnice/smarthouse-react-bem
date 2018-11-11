import * as React from "react";
import { cn } from "@bem-react/classname";

interface IPropsIcon {
  src: string;
  className?: string;
}

const cnIcon = cn("Icon");

const Icon: React.SFC<IPropsIcon> = ({ src, className }) => {
  return <img src={src} className={cnIcon({}, [className])} role="img" />;
};

export default Icon;
