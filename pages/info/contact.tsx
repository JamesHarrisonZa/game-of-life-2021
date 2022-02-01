import { Center, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout/Layout';

const About: FC = () => {
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
