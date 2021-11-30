export class StartingCells {
  public readonly cellsHeight: number;
  public readonly cellsWidth: number;
  public readonly cells: ReadonlyArray<ReadonlyArray<number>>;
  private readonly _fillPercentage = 40; //Disable animations if you want to fill more, else it lags

  constructor(windowHeight: number, windowWidth: number) {
    this.cellsHeight = this.getCellsHeight(windowHeight);
    this.cellsWidth = this.getCellsWidth(windowWidth);
    this.cells = this.getStartingCells(this.cellsHeight, this.cellsWidth);
  }

  private getCellsHeight(windowHeight: number): number {
    return this.getCellUnits(windowHeight);
  }

  private getCellsWidth(windowWidth: number): number {
    const windowMargin = 2;
    return this.getCellUnits(windowWidth) - windowMargin;
  }

  private getStartingCells(
    gridHeight: number,
    gridWidth: number
  ): ReadonlyArray<ReadonlyArray<number>> {
    const fillerNumber = -1;

    return new Array<number>(gridHeight)
      .fill(fillerNumber) //Cant apply map on undefined elements, need to set to null or some value first
      .map((_, y) =>
        new Array<number>(gridWidth).fill(fillerNumber).map((__, x) => {
          return this.isInAreaToRandomise(gridHeight, gridWidth, y, x)
            ? this.getRandomBinary()
            : 0;
        })
      );
  }

  private getCellUnits(viewPortSize: number): number {
    const cellDimension = 10;
    const cellMargin = 2;
    return Math.floor(viewPortSize / cellDimension) - cellMargin;
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
