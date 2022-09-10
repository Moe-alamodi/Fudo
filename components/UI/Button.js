import React from "react";
import styles from "./Button.module.css";
const Button = ({ btn, children }) => {
  return <button className={`${btn} `}>{children}</button>;
};

export default Button;
