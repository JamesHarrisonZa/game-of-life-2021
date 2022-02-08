import { Center } from '@chakra-ui/react';
import { FC } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout/Layout';
import CustomGame from '../../components/game/CustomGame';

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
