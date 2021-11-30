import { Box, Grid, GridItem } from '@chakra-ui/react';
import { tr } from 'date-fns/locale';
import { useState } from 'react';
import { GameOfLife } from '../lib/gameOfLife';
import { StartingCells } from '../lib/startingCells';
import Cell from './Cell';

interface ownProps {
  startingCells: StartingCells;
  gameOfLife: GameOfLife;
}

const RandomGame: React.FC<ownProps> = ({ startingCells, gameOfLife }) => {
  const height = startingCells.cellsHeight;
  const width = startingCells.cellsWidth;

  const cells = startingCells.cells.map((row) => {
    return row.map((col) => {
      return <Cell key={`${row}:${col}`} isAlive={col === 1} />;
    });
  });

  return (
    <Grid
      templateRows={`repeat(${height}, 1fr)`}
      templateColumns={`repeat(${width}, 1fr)`}
      gap={1}
    >
      {cells}
    </Grid>
  );
};

export default RandomGame;
