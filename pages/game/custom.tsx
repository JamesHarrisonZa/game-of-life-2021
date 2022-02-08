import { Center } from '@chakra-ui/react';
import { FC } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout, { siteTitle } from '../../components/layout/Layout';

// Dont SSR this component as it relies on the screen dimensions
const CustomGame = dynamic(() => import('../../components/game/CustomGame'), {
  ssr: false,
});

const GameRandom: FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Center>
        <CustomGame />
      </Center>
    </Layout>
  );
};

export default GameRandom;
