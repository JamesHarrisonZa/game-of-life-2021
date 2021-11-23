import { Center, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Center>
        <Heading>james.harrison.za@gmail.com</Heading>
      </Center>
    </Layout>
  );
};

export default About;
