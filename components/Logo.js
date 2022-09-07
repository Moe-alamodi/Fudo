import React from "react";
import Link from "next/link";
import { UilPizzaSlice } from "@iconscout/react-unicons";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <a className="logo-link">
        <UilPizzaSlice size={43} />
        <span className="text-gradient">Fudo</span>
      </a>
    </Link>
  );
};

export default Logo;
