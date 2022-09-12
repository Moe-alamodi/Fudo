import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilListUiAlt } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilPizzaSlice } from "@iconscout/react-unicons";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles["header-container"]}>
      <Logo />
      <nav className={styles.header}>
        <ul className={styles.links}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/#menu">
            <a>Menu</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ul>

        <div className={styles["cart-side"]}>
          <UilShoppingBag size="2rem" />
          <span className={styles["items-number"]}>0</span>
        </div>
        <a
          className={styles.menu}
          onClick={() => setToggleMenu((prev) => !prev)}
        >
          {!toggleMenu ? (
            <UilListUiAlt size="2rem" />
          ) : (
            <UilTimes size="2rem" />
          )}
        </a>
      </nav>
      <div className={`${!toggleMenu ? styles.hidden : styles["links-small"]}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/#menu">
          <a>Menu</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
