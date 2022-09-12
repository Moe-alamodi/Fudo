import React, { useState, useReducer } from "react";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import Image from "next/image";
import styles from "./Pizza.module.css";
import Button from "../../components/UI/Button";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import Heading from "../../components/Head";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      if (state.count === 1) return { ...state, count: state.count };
      return { ...state, count: state.count - 1 };
    case "Small":
      return { ...state, size: action.type, value: 0 };
    case "Medium":
      return { ...state, size: action.type, value: 1 };
    case "Large":
      return { ...state, size: action.type, value: 2 };

    default: {
      initialState;
    }
  }
};
const Pizza = ({ pizza }) => {
  const initialState = { count: 1, size: "Medium", value: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const src = urlFor(pizza.image).url();
  const price = (pizza.price[state.value] * state.count).toFixed(2);

  return (
    <>
      <Heading />
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
          <div className={styles["details-container"]}>
            <h3>{pizza.name}</h3>
            <p>{pizza.details}</p>
            <h3>{`$${price}`}</h3>
            <div className={styles.sizes}>
              <span>Size</span>
              <div className={styles.SizeVaraints}>
                <div onClick={() => dispatch({ type: "Small" })}>
                  <Button
                    btn={`btnSize ${
                      state.value === 0
                        ? "btnSizeSelected"
                        : "btnSizeUnselected"
                    }`}
                  >
                    Small
                  </Button>
                </div>
                <div onClick={() => dispatch({ type: "Medium" })}>
                  <Button
                    btn={`btnSize ${
                      state.value === 1
                        ? "btnSizeSelected"
                        : "btnSizeUnselected"
                    }`}
                  >
                    Medium
                  </Button>
                </div>
                <div onClick={() => dispatch({ type: "Large" })}>
                  <Button
                    btn={`btnSize ${
                      state.value === 2
                        ? "btnSizeSelected"
                        : "btnSizeUnselected"
                    }`}
                  >
                    Large
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.quantity}>
              <span>Amount</span>
              <Image
                src={LeftArrow}
                width={20}
                height={20}
                objectFit="contain"
                alt=""
                onClick={() => dispatch({ type: "decrement" })}
              />
              <span>{state.count}</span>
              <Image
                src={RightArrow}
                width={20}
                height={20}
                objectFit="contain"
                alt=""
                onClick={() => dispatch({ type: "increment" })}
              />
            </div>
            <Button btn="primary order-btn">Add to Cart</Button>
          </div>
        </div>
      </Layout>
    </>
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
