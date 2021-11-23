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
        <Heading>TODO add Link to Github README</Heading>
      </Center>
    </Layout>
  );
};

export default About;
