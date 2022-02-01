import Head from "next/head";
import dynamic from "next/dynamic";
import { FC } from "react";
import Layout, { siteTitle } from "../../components/layout/Layout";

// Dont SSR this component as it relies on the screen dimensions
const RandomGame = dynamic(() => import("../../components/game/RandomGame"), {
  ssr: false,
});

const GameRandom: FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <RandomGame />
    </Layout>
  );
};

export default GameRandom;
