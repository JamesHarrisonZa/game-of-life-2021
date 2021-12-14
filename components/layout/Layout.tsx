import { Flex } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
export const siteTitle = 'Game of life 2021';

interface ownProps {
  children: React.ReactNode;
}

const Layout: React.FC<ownProps> = ({ children }: ownProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Welcome to my tech demo. Game of life 2021"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Flex
        shrink={0}
        direction="column"
        justifyContent="space-between"
        minHeight="100vh"
      >
        <Navbar />
        <Container flexGrow={1} maxW="container.xl" p={0}>
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
