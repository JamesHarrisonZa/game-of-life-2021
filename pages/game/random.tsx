import { Button, Center, Box } from '@chakra-ui/react';
import { isEqual } from 'lodash';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout, { siteTitle } from '../../components/Layout';
import GameGrid from '../../components/GameGrid';
import { GameOfLife } from '../../lib/gameOfLife';
import { StartingCells } from '../../lib/startingCells';

const GameRandom: React.FC = () => {
  const windowHeight = 200; //TODO use viewport/available space
  const windowWidth = 200; //TODO use viewport/available space

  const startingCells = new StartingCells(windowHeight, windowWidth);
  const [gameOfLife] = useState(new GameOfLife());
  const [gameCells, setGameCells] = useState(startingCells.cells);

  const [isGameInProgress, setIsGameInProgress] = useState(false);
  const [generationNumber, setGenerationNumber] = useState(0);

  const handleOnClick = () => {
    setIsGameInProgress(!isGameInProgress);
  };

  const updateGame = () => {
    const nextGeneration = gameOfLife.getNextGeneration(gameCells);

    if (isGameOver(gameCells, nextGeneration)) {
      setIsGameInProgress(false);
    } else {
      setGameCells(nextGeneration);
      setGenerationNumber(generationNumber + 1);
    }
  };

  useEffect(() => {
    var updateSeconds = 1;
    const updateInterval = setInterval(() => {
      if (isGameInProgress) {
        updateGame();
      }
    }, updateSeconds * 1000);

    return () => {
      clearInterval(updateInterval);
    };
  }, [gameCells, gameOfLife, generationNumber, isGameInProgress]);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Center>
        <Button
          colorScheme="green"
          onClick={handleOnClick}
          isLoading={isGameInProgress}
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

const isGameOver = (
  gameCells: readonly (readonly number[])[],
  nextGeneration: readonly (readonly number[])[]
) => isEqual(gameCells, nextGeneration);
