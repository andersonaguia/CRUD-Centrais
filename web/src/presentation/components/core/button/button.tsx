import React, { FC, ReactNode } from "react";
import * as s from "./styles/button-style.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  icon?: FC<any>;
}

export const Button: FC<ButtonProps> = ({ children, icon: Icon, ...rest }) => {
  return (
    <button className={s.button} {...rest}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};
