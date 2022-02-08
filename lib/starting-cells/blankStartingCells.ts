export class BlankStartingCells {
  public readonly cellsHeight: number;
  public readonly cellsWidth: number;
  public readonly cells: ReadonlyArray<ReadonlyArray<number>>;

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

    const filler = null as unknown as number; //Cant apply map on undefined elements, need to set to null or some value first

    return Array<number>(cellsHeight)
      .fill(filler)
      .map(() => Array<number>(cellsWidth).fill(0));
  }

  private getCellUnits(sizePixels: number): number {
    const cellDimensionPixels = 10;
    const cellMarginPixels = 1;
    return Math.floor(sizePixels / (cellDimensionPixels + cellMarginPixels));
  }
}
