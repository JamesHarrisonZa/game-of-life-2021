import { Button, Center, Text } from '@chakra-ui/react';
import { isEqual } from 'lodash';
import Head from 'next/head';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import Layout, { siteTitle } from '../../components/layout/Layout';
import GameGrid from '../../components/game/GameGrid';
import { GameOfLife } from '../../lib/gameOfLife';
import { StartingCells } from '../../lib/startingCells';

const getWindowWidth = () => {
  if (window.innerWidth < 40) {
    return 10;
  }
  return (window.innerWidth - 40) / 4; //TODO this better & investigate issue when refreshing
};

const getWindowHeight = () => {
  if (window.innerHeight < 260) {
    return 65;
  }
  return (window.innerHeight - 260) / 4; //TODO this better & investigate issue when refreshing
};

const GameRandom: FC = () => {
  const [startingCells, setStartingCells] = useState(
    new StartingCells(getWindowHeight(), getWindowWidth())
  );
  const [gameCells, setGameCells] = useState(startingCells.cells);

  const [isGameInProgress, setIsGameInProgress] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [generationNumber, setGenerationNumber] = useState(0);

  const gameOfLife = new GameOfLife();

  const startOrPauseGame = () => {
    setIsGameInProgress(!isGameInProgress);
  };

  const resetStartingAndGameCells = () => {
    const startingCells = new StartingCells(
      getWindowHeight(),
      getWindowWidth()
    );
    setStartingCells(startingCells);
    setGameCells(startingCells.cells);
  };

  const resetGame = () => {
    setIsGameInProgress(false);
    setIsGameOver(false);

    resetStartingAndGameCells();
    setGenerationNumber(0);
  };

  const updateGame = () => {
    const nextGeneration = gameOfLife.getNextGeneration(gameCells);

    if (isEqual(gameCells, nextGeneration)) {
      setIsGameInProgress(false);
      setIsGameOver(true);
    } else {
      setGameCells(nextGeneration);
      setGenerationNumber(generationNumber + 1);
    }
  };

  const handleResize = () => {
    resetGame();
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        {!isGameOver && (
          <Button
            colorScheme="green"
            onClick={startOrPauseGame}
            isLoading={isGameInProgress}
            loadingText="Pause Game"
            disabled={false}
            margin={4}
            width={40}
          >
            Start Game
          </Button>
        )}
        <Text marginRight={2}> {generationNumber} </Text>
        <Text> generations</Text>
        <Button colorScheme="red" onClick={resetGame} margin={4} width={40}>
          Reset Game
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
