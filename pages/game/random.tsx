import { Button, Center, Box } from '@chakra-ui/react';
import { isEqual } from 'lodash';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout, { siteTitle } from '../../components/layout/Layout';
import GameGrid from '../../components/game/GameGrid';
import { GameOfLife } from '../../lib/gameOfLife';
import { StartingCells } from '../../lib/startingCells';

const GameRandom: React.FC = () => {
  const windowHeight = 200; //TODO use viewport/available space
  const windowWidth = 200; //TODO use viewport/available space

  const startingCells = new StartingCells(windowHeight, windowWidth);
  const [gameOfLife] = useState(new GameOfLife());
  const [gameCells, setGameCells] = useState(startingCells.cells);

  const [isGameInProgress, setIsGameInProgress] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [generationNumber, setGenerationNumber] = useState(0);

  const startOrPauseGame = () => {
    setIsGameInProgress(!isGameInProgress);
  };

  const restartGame = () => {
    const startingCells = new StartingCells(windowHeight, windowWidth);
    setGameCells(startingCells.cells);
    setIsGameOver(false);
    setGenerationNumber(0);
  };

  const updateGame = () => {
    const nextGeneration = gameOfLife.getNextGeneration(gameCells);

    if (noChange(gameCells, nextGeneration)) {
      updateGameOver();
    } else {
      setGameCells(nextGeneration);
      setGenerationNumber(generationNumber + 1);
    }
  };

  const updateGameOver = () => {
    setIsGameInProgress(false);
    setIsGameOver(true);
  };

  useEffect(() => {
    var updateSeconds = 0.5;
    const updateInterval = setInterval(() => {
      if (isGameInProgress) {
        updateGame();
      }
    }, updateSeconds * 1000);

    return () => {
      clearInterval(updateInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameCells, gameOfLife, generationNumber, isGameInProgress]);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Center>
        {isGameOver ? (
          <Button colorScheme="red" onClick={restartGame} margin={2}>
            Reset
          </Button>
        ) : (
          <Button
            colorScheme="green"
            onClick={startOrPauseGame}
            isLoading={isGameInProgress}
            loadingText="Pause Game"
            disabled={false}
            margin={2}
          >
            Start Game
          </Button>
        )}
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

const noChange = (
  gameCells: readonly (readonly number[])[],
  nextGeneration: readonly (readonly number[])[]
) => isEqual(gameCells, nextGeneration);
