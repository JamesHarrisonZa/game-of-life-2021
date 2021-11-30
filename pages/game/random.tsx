import { Center, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/Layout';
import RandomGame from '../../components/RandomGame';
import { GameOfLife } from '../../lib/gameOfLife';
import { StartingCells } from '../../lib/startingCells';

const GameRandom: React.FC = () => {
  const windowHeight = 200; //TODO Figure out viewport/available space
  const windowWidth = 200; //TODO Figure out viewport/available space

  const startingCells = new StartingCells(windowHeight, windowWidth);
  const gameOfLife = new GameOfLife();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <RandomGame startingCells={startingCells} gameOfLife={gameOfLife} />
    </Layout>
  );
};

export default GameRandom;
