export class GameOfLife {
  public getNextGeneration(
    cells: ReadonlyArray<ReadonlyArray<number>>
  ): ReadonlyArray<ReadonlyArray<number>> {
    return cells.map((row, rowIndex) => {
      return row.map((isAlive, colIndex) => {
        // prettier-ignore
        const neighbours =
          this.getCell(cells, rowIndex - 1, colIndex - 1) + this.getCell(cells, rowIndex - 1, colIndex) + this.getCell(cells, rowIndex - 1, colIndex + 1) +
          this.getCell(cells, rowIndex, colIndex - 1)                                                   + this.getCell(cells, rowIndex, colIndex + 1) +
          this.getCell(cells, rowIndex + 1, colIndex - 1) + this.getCell(cells, rowIndex + 1, colIndex) + this.getCell(cells, rowIndex + 1, colIndex + 1);

        return neighbours === 3 || (neighbours === 2 && isAlive) ? 1 : 0;
      });
    });
  }

  private getCell(
    cells: ReadonlyArray<ReadonlyArray<number>>,
    row: number,
    col: number
  ): number {
    return cells[row] && cells[row][col] ? 1 : 0;
  }
}
