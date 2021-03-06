import { Button, Center, Flex, Text } from '@chakra-ui/react';
import { isEqual } from 'lodash';
import { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import GameGrid from './GameGrid';
import { GameOfLife } from '../../lib/gameOfLife';
import { RandomStartingCells } from '../../lib/starting-cells/randomStartingCells';

const getGridWidth = () => {
  if (typeof window === 'undefined') {
    return 0;
  }
  return window.innerWidth / 4;
};

const getGridHeight = () => {
  if (typeof window === 'undefined') {
    return 0;
  }

  const unavailableHeight = 216; //Looked into useMeasure from react-use
  return (window.innerHeight - unavailableHeight) / 4;
};

const RandomGame: FC = () => {
  const [startingCells, setStartingCells] = useState(
    new RandomStartingCells(getGridHeight(), getGridWidth())
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
    const startingCells = new RandomStartingCells(
      getGridHeight(),
      getGridWidth()
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
    <Flex direction="column" flexGrow={1}>
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
      <Center>
        <GameGrid
          cells={gameCells}
          height={startingCells.cellsHeight}
          width={startingCells.cellsWidth}
        />
      </Center>
    </Flex>
  );
};

export default RandomGame;
