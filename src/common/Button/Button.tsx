import * as React from "react";
import { cn } from "@bem-react/classname";

export const cnButton = cn("Button");

export interface IButtonProps {
  theme: "grey" | "yellow";
  className?: string;
  children: string;
}

export const Button: React.SFC<IButtonProps> = ({
  theme,
  className,
  children
}) => (
  <button
    className={cnButton(
      {
        theme
      },
      [className]
    )}
  >
    {children}
  </button>
);
