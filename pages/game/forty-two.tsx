import { Center, Heading } from "@chakra-ui/react";
import { FC } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout/Layout";

const GameFortyTwo: FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Center>
        <Heading>42</Heading>
      </Center>
    </Layout>
  );
};

export default GameFortyTwo;
