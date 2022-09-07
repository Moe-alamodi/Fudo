import React from "react";
import styles from "./Button.module.css";
const Button = ({ btn }) => {
  return <button className={`${btn} `}>Get Started</button>;
};

export default Button;
