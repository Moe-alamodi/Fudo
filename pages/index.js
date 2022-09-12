import Menu from "../components/Menu/Menu";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services/Services";
import { client } from "../lib/client";
import Heading from "../components/Head";

export default function Home({ pizzas }) {
  return (
    <Layout>
      <div>
        <Heading />
        {/* body */}
        <main>
          <Hero />
          <Services />
          <Menu data={pizzas} />
        </main>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type=="pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: { pizzas },
  };
};
