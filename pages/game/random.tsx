import { Button, Center } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout, { siteTitle } from '../../components/Layout';
import GameGrid from '../../components/GameGrid';
import { GameOfLife } from '../../lib/gameOfLife';
import { StartingCells } from '../../lib/startingCells';

const GameRandom: React.FC = () => {
  const windowHeight = 200; //TODO use viewport/available space
  const windowWidth = 200; //TODO use viewport/available space

  const [startingCells] = useState(
    new StartingCells(windowHeight, windowWidth)
  );
  const [gameOfLife] = useState(new GameOfLife());
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [gameCells, setGameCells] = useState(startingCells.cells);

  useEffect(() => {
    if (isGameStarted) {
      const nextGeneration = gameOfLife.getNextGeneration(gameCells);
      setGameCells(nextGeneration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameStarted]);

  const handleOnClick = () => {
    setIsGameStarted(!isGameStarted);
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Center>
        <Button
          colorScheme="blue"
          onClick={handleOnClick}
          isLoading={isGameStarted}
          loadingText="Pause Game"
          disabled={false}
        >
          Start Game
        </Button>
      </Center>
      <Center>
        <GameGrid
          cells={gameCells}
          height={startingCells.cellsHeight}
          width={startingCells.cellsWidth}
        />
      </Center>
    </Layout>
  );
};

export default GameRandom;
