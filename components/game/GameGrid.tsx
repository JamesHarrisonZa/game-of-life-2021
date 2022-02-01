import { Grid } from '@chakra-ui/react';
import { FC } from 'react';
import Cell from './Cell';

interface ownProps {
  cells: ReadonlyArray<ReadonlyArray<number>>;
  height: number;
  width: number;
}

const getMappedCells = (cells: readonly (readonly number[])[]) => {
  if (!cells) return;
  return cells.map((row, rowIndex) =>
    row.map((col, colIndex) => (
      <Cell key={`${rowIndex}:${colIndex}`} isAlive={col === 1} />
    ))
  );
};

const GameGrid: FC<ownProps> = ({ cells, height, width }) => {
  const mappedCells = getMappedCells(cells);

  return (
    <Grid
      templateRows={`repeat(${height}, 40px)`}
      templateColumns={`repeat(${width}, 40px)`}
      gap={1}
    >
      {mappedCells}
    </Grid>
  );
};

export default GameGrid;
