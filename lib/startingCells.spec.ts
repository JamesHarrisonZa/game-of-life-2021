import { StartingCells } from "./startingCells";

describe("StartingCells tests", () => {
  describe("Given window height and width", () => {
    const _windowHeight = 1080;
    const _windowWidth = 1920;

    describe("when creating StartingCells", () => {
      let startingCells: StartingCells;

      beforeEach(() => {
        startingCells = new StartingCells(_windowHeight, _windowWidth);
      });

      test("then computes a relative CellsHeight", () => {
        const actual = startingCells.cellsHeight;
        const expected = 98;
        expect(actual).toBe(expected);
      });

      test("then computes a relative CellsWidth", () => {
        const actual = startingCells.cellsWidth;
        const expected = 174;
        expect(actual).toBe(expected);
      });

      test("then returns Cells", () => {
        expect(startingCells.cells).toBeDefined();
      });

      test("then number of cells matches height", () => {
        const actual = startingCells.cells.length;
        const expected = 98;
        expect(actual).toBe(expected);
      });

      test("then number of cells matches width", () => {
        const actual = startingCells.cells[0].length;
        const expected = 174;
        expect(actual).toBe(expected);
      });

      test("then has mixture of ones", () => {
        const actual = startingCells.cells[0].some(
          (cellValue) => cellValue === 1
        ); //very very rare case of failure due to randomness
        const expected = true;
        expect(actual).toBe(expected);
      });

      test("then has mixture of zeros", () => {
        const actual = startingCells.cells[0].some(
          (cellValue) => cellValue === 0
        ); //very very rare case of failure due to randomness
        const expected = true;
        expect(actual).toBe(expected);
      });
    });
  });
});
