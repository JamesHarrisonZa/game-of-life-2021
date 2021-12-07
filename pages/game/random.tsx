import { Button, Center, Box } from '@chakra-ui/react';
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
  const [gameCells, setGameCells] = useState(startingCells.cells);

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [generationNumber, setGenerationNumber] = useState(0);

  const updateGame = () => {
    setGenerationNumber(generationNumber + 1);
    const nextGeneration = gameOfLife.getNextGeneration(gameCells);
    setGameCells(nextGeneration);
  };

  const handleOnClick = () => {
    setIsGameStarted(!isGameStarted);
    updateGame();
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Center>
        <Button
          colorScheme="green"
          onClick={handleOnClick}
          isLoading={isGameStarted}
          loadingText="Pause Game"
          disabled={false}
          margin={2}
        >
          Start Game
        </Button>
      </Center>
      <Center>
        <Box marginBottom={2}>{generationNumber} generations</Box>
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
