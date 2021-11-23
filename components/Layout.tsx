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
      <Navbar />
      <Container minHeight="85vh">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
