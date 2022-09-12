import React from "react";
const Button = ({ btn, children }) => {
  return (
    <button className={`primary ${btn}`} type="button">
      {children}
    </button>
  );
};

export default Button;
