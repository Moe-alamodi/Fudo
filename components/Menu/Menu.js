import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Menu.module.css";
import { urlFor } from "../../lib/client";
import Button from "../UI/Button";
const Menu = ({ data }) => {
  return (
    <div className={`padding1 container`} id="menu">
      <span>OUR MENU</span>
      <h1>
        Menu That Always
        <br />
        Make You Fall In Love{" "}
      </h1>
      <ul className={`${styles["menu-container"]} `}>
        {data.map((pizza, index) => {
          const src = urlFor(pizza.image).url();

          return (
            <li className={styles.pizza} key={index}>
              <Link href={`/pizza/${pizza.slug.current}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    objectFit="cover"
                    layout="fill"
                    alt={pizza.name}
                  />
                </div>
              </Link>

              <h3>{pizza.name}</h3>
              <p>{pizza.details}</p>
              <div className={styles.buyOption}>
                <h4>{`$${pizza.price[2]}`}</h4>
                <Button btn="primary">+</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
