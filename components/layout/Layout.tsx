import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
export const siteTitle = "Game of life 2021";

interface ownProps {
  children: React.ReactNode;
}

const Layout: FC<ownProps> = ({ children }: ownProps) => (
  <Flex direction="column" minH="100vh">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Welcome to my tech demo. Game of life 2021"
      />
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Navbar />
    <Flex flexGrow={1}>{children}</Flex>
    <Footer />
  </Flex>
);

export default Layout;
