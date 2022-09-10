import React from "react";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import Image from "next/image";
import styles from "./Pizza.module.css";
import Button from "../../components/UI/Button";

const Pizza = ({ pizza }) => {
  const src = urlFor(pizza.image).url();

  return (
    <Layout>
      <div className={`${styles.container} padding1`}>
        <div className={styles.imageWrapper}>
          <Image
            loader={() => src}
            alt=""
            src={src}
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.details}</p>
          <h3>{pizza.price[1]}</h3>
          <Button btn={`${styles.btn} primary`}>Add to Cart</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Pizza;

// This fucnction will get all the paths(slugs) for all page before clicking on them
export const getStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
};
