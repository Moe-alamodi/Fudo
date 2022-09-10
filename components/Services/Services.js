import React from "react";
import { servicesData } from "../../constants/index";
import Image from "next/image";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={`padding1 container`}>
      <span>WHAT WE SERVE</span>
      <h1>
        Your Favourite Food
        <br />
        Delivery Partner
      </h1>
      <div className={`${styles["services-container"]} `}>
        {servicesData.map((service, index) => (
          <li key={index} className={styles.service}>
            <Image
              src={service.img}
              layout="intrinsic"
              width={150}
              height={150}
              alt=""
            />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Services;
