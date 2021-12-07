import { Grid } from '@chakra-ui/react';
import Cell from './Cell';

interface ownProps {
  cells: ReadonlyArray<ReadonlyArray<number>>;
  height: number;
  width: number;
}

const GameGrid: React.FC<ownProps> = ({ cells, height, width }) => {
  const mappedCells = cells.map((row) => {
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
      {mappedCells}
    </Grid>
  );
};

export default GameGrid;
