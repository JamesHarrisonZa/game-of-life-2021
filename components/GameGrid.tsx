import { Grid } from '@chakra-ui/react';
import Cell from './Cell';

interface ownProps {
  cells: ReadonlyArray<ReadonlyArray<number>>;
  height: number;
  width: number;
}

const getMappedCells = (cells: readonly (readonly number[])[]) => {
  if (!cells) return;
  return cells.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      return <Cell key={`${rowIndex}:${colIndex}`} isAlive={col === 1} />;
    });
  });
};

const GameGrid: React.FC<ownProps> = ({ cells, height, width }) => {
  const mappedCells = getMappedCells(cells);

  return (
    <Grid
      templateRows={`repeat(${height}, 1fr)`}
      templateColumns={`repeat(${width}, 1fr)`}
      gap={1}
    >
      {mappedCells}
    </Grid>
  );
};

export default GameGrid;
