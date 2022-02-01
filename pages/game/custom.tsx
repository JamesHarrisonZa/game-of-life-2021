import { Center, Heading } from "@chakra-ui/react";
import { FC } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout/Layout";

const GameRandom: FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Center>
        <Heading>Will allow for customising the grid</Heading>
      </Center>
    </Layout>
  );
};

export default GameRandom;
