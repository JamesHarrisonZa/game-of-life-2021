export class StartingCells {
  public readonly cellsHeight: number;
  public readonly cellsWidth: number;
  public readonly cells: ReadonlyArray<ReadonlyArray<number>>;
  private readonly _fillPercentage = 100;

  constructor(height: number, width: number) {
    this.cellsHeight = this.getCellsHeight(height);
    this.cellsWidth = this.getCellsWidth(width);
    this.cells = this.getStartingCells(this.cellsHeight, this.cellsWidth);
  }

  private getCellsHeight(height: number): number {
    return this.getCellUnits(height);
  }

  private getCellsWidth(width: number): number {
    return this.getCellUnits(width);
  }

  private getStartingCells(
    cellsHeight: number,
    cellsWidth: number
  ): ReadonlyArray<ReadonlyArray<number>> {
    if (cellsHeight < 0 || cellsWidth < 0) {
      return [];
    }

    const filler = null as unknown as number;

    return new Array<number>(cellsHeight)
      .fill(filler) //Cant apply map on undefined elements, need to set to null or some value first
      .map((_, y) =>
        new Array<number>(cellsWidth).fill(filler).map((__, x) => {
          return this.isInAreaToRandomise(cellsHeight, cellsWidth, y, x)
            ? this.getRandomBinary()
            : 0;
        })
      );
  }

  private getCellUnits(sizePixels: number): number {
    const cellDimensionPixels = 10;
    const cellMarginPixels = 1;
    return Math.floor(sizePixels / (cellDimensionPixels + cellMarginPixels));
  }

  private isInAreaToRandomise(
    gridHeight: number,
    gridWidth: number,
    y: number,
    x: number
  ): boolean {
    return (
      y < (gridHeight * this._fillPercentage) / 100 &&
      x < (gridWidth * this._fillPercentage) / 100
    );
  }

  private getRandomBinary(): number {
    const max = 1;
    const min = 0;
    return Math.floor(Math.random() * (max - min + 1));
  }
}
