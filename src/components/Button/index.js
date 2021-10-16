import React from "react";
import "./style.scss";

const Button = props => {
  const { children } = props;
  return <button {...props}>{children}</button>;
};

export default Button;
