import { BlankStartingCells } from './blankStartingCells';

describe('BlankStartingCells tests', () => {
  describe('Given height and width greater than zero', () => {
    const _height = 1080;
    const _width = 1920;

    describe('when creating  BlankStartingCells', () => {
      let blankStartingCells: BlankStartingCells;

      beforeEach(() => {
        blankStartingCells = new BlankStartingCells(_height, _width);
      });

      test('then computes a relative cells height', () => {
        const actual = blankStartingCells.cellsHeight;
        const expected = 98;
        expect(actual).toBe(expected);
      });

      test('then computes a relative cells width', () => {
        const actual = blankStartingCells.cellsWidth;
        const expected = 174;
        expect(actual).toBe(expected);
      });

      test('then has Cells', () => {
        expect(blankStartingCells.cells).toBeDefined();
      });

      test('then number of cells matches height', () => {
        const actual = blankStartingCells.cells.length;
        const expected = 98;
        expect(actual).toBe(expected);
      });

      test('then number of cells matches width', () => {
        const actual = blankStartingCells.cells[0].length;
        const expected = 174;
        expect(actual).toBe(expected);
      });

      test('then has all zeros', () => {
        const actual = blankStartingCells.cells.every((row) =>
          row.every((cellValue) => cellValue === 0)
        );
        const expected = true;
        expect(actual).toBe(expected);
      });
    });
  });

  describe('Given height and width of zero', () => {
    const _height = 0;
    const _width = 0;

    describe('when creating  BlankStartingCells', () => {
      let blankStartingCells: BlankStartingCells;

      beforeEach(() => {
        blankStartingCells = new BlankStartingCells(_height, _width);
      });

      test('then has Cells', () => {
        expect(blankStartingCells.cells).toBeDefined();
      });

      test('then has cells height of zero', () => {
        expect(blankStartingCells.cellsHeight).toEqual(0);
      });

      test('then has cells width of zero', () => {
        expect(blankStartingCells.cellsWidth).toEqual(0);
      });
    });
  });

  describe('Given height and width less than zero', () => {
    const _height = -1;
    const _width = -1;

    describe('when creating  BlankStartingCells', () => {
      let blankStartingCells: BlankStartingCells;

      beforeEach(() => {
        blankStartingCells = new BlankStartingCells(_height, _width);
      });

      test('then has Cells', () => {
        expect(blankStartingCells.cells).toBeDefined();
      });

      test('then has matching negative height', () => {
        expect(blankStartingCells.cellsHeight).toEqual(-1);
      });

      test('then has matching negative width', () => {
        expect(blankStartingCells.cellsWidth).toEqual(-1);
      });
    });
  });
});
