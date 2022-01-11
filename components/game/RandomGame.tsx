import { Box, Button, Center, Text, VStack } from '@chakra-ui/react';
import { isEqual } from 'lodash';
import { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import GameGrid from './GameGrid';
import { GameOfLife } from '../../lib/gameOfLife';
import { StartingCells } from '../../lib/startingCells';

const getWindowWidth = () => {
  if (typeof window === 'undefined') {
    return 100; //TODO: Get initial window value as a prop
  }
  if (window && window.innerWidth < 40) {
    return 10;
  }
  return (window.innerWidth - 40) / 4; //TODO this better?
};

const getWindowHeight = () => {
  if (typeof window === 'undefined') {
    return 100;
  }
  if (window && window.innerHeight < 260) {
    return 65;
  }
  return (window.innerHeight - 260) / 4; //TODO this better?
};

const RandomGame: FC = () => {
  const [startingCells, setStartingCells] = useState(
    new StartingCells(getWindowHeight(), getWindowWidth())
  );
  const [gameCells, setGameCells] = useState(startingCells.cells);
  const [gameOfLife] = useState(new GameOfLife());

  const [isGameInProgress, setIsGameInProgress] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [generationNumber, setGenerationNumber] = useState(0);

  const startOrPauseGame = () => {
    setIsGameInProgress(!isGameInProgress);
  };

  const resetCells = () => {
    const startingCells = new StartingCells(
      getWindowHeight(),
      getWindowWidth()
    );
    setStartingCells(startingCells);
    setGameCells(startingCells.cells);
  };

  const resetGame = useCallback(() => {
    setIsGameInProgress(false);
    setIsGameOver(false);
    setGenerationNumber(0);
  }, []);

  const updateGame = useCallback(() => {
    const nextGeneration = gameOfLife.getNextGeneration(gameCells);

    if (isEqual(gameCells, nextGeneration)) {
      setIsGameInProgress(false);
      setIsGameOver(true);
    } else {
      setGameCells(nextGeneration);
      setGenerationNumber(generationNumber + 1);
    }
  }, [gameCells, gameOfLife, generationNumber]);

  const handleResizeEvent = useCallback(() => {
    resetGame();
    resetCells();
  }, [resetGame]);

  const handleResetOnClick = () => {
    resetGame();
    resetCells();
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResizeEvent);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, [handleResizeEvent]);

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
  }, [gameCells, gameOfLife, generationNumber, isGameInProgress, updateGame]);

  return (
    <VStack>
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
        <Button
          colorScheme="red"
          onClick={handleResetOnClick}
          margin={4}
          width={40}
        >
          Reset Game
        </Button>
      </Center>
      <Box>
        <GameGrid
          cells={gameCells}
          height={startingCells.cellsHeight}
          width={startingCells.cellsWidth}
        />
      </Box>
    </VStack>
  );
};

export default RandomGame;
