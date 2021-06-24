import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import avatarImage from "../../public/images/avatar.svg";

import styles from "./home.module.scss";

interface ProductInterface {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: ProductInterface) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={avatarImage} alt="Girl Coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1Ikas0LswqUQqKaze8AOq4My");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24H
  };
};
