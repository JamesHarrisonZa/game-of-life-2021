import Head from 'next/head';
import Layout, { siteTitle } from '../../components/Layout';
import GameGrid from '../../components/GameGrid';
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

      <GameGrid startingCells={startingCells} gameOfLife={gameOfLife} />
    </Layout>
  );
};

export default GameRandom;
