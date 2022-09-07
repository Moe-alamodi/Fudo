import Link from "next/link";
import Image from "next/image";

import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo";
import {
  UilFacebook,
  UilInstagramAlt,
  UilLinkedin,
} from "@iconscout/react-unicons";

const Fotter = () => {
  return (
    <div className={styles["footer-container"]}>
      <span>ALL RIGHT RESERVED TO FUDO</span>
      <div className={styles.socials}>
        <Link href="https://www.facebook.com/">
          <a>
            <UilFacebook size={45} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/">
          <a>
            <UilInstagramAlt size={45} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/">
          <a>
            <UilLinkedin size={45} />
          </a>
        </Link>
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default Fotter;
