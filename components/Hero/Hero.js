import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import HeroImg from "../../assets/HeroImage.png";
import cherry from "../../assets/Cherry.png";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["left-side"]}>
        <div className={styles.cherry}>
          <span>More than Faster</span>
          <Image src={cherry} width={40} height={25} alt="cherry" />
        </div>
        <div className={styles.heading}>
          <h1>
            Be The Fastest
            <br /> In Delivering
            <br /> Your <span>Pizza</span>
          </h1>
        </div>
        <div className={styles.text}>
          <p>
            Our Mission is to filling your tummy with delicious food and with
            fast and free delivery
          </p>
        </div>
        <div onClick={() => (window.location = "#menu")}>
          <Button btn="btn-hero">Get Started</Button>
        </div>
      </div>
      <div className={styles["right-side"]}>
        <Image src={HeroImg} layout="intrinsic" alt="Eating Pizza" />
      </div>
    </div>
  );
};

export default Hero;
