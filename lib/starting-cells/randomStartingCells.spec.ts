import { RandomStartingCells } from './randomStartingCells';

describe('RandomStartingCells tests', () => {
  describe('Given height and width greater than zero', () => {
    const _height = 1080;
    const _width = 1920;

    describe('when creating RandomStartingCells', () => {
      let randomStartingCells: RandomStartingCells;

      beforeEach(() => {
        randomStartingCells = new RandomStartingCells(_height, _width);
      });

      test('then computes a relative cells height', () => {
        const actual = randomStartingCells.cellsHeight;
        const expected = 98;
        expect(actual).toBe(expected);
      });

      test('then computes a relative cells width', () => {
        const actual = randomStartingCells.cellsWidth;
        const expected = 174;
        expect(actual).toBe(expected);
      });

      test('then has Cells', () => {
        expect(randomStartingCells.cells).toBeDefined();
      });

      test('then number of cells matches height', () => {
        const actual = randomStartingCells.cells.length;
        const expected = 98;
        expect(actual).toBe(expected);
      });

      test('then number of cells matches width', () => {
        const actual = randomStartingCells.cells[0].length;
        const expected = 174;
        expect(actual).toBe(expected);
      });

      test('then has mixture of ones', () => {
        const actual = randomStartingCells.cells[0].some(
          (cellValue) => cellValue === 1
        );
        const expected = true;
        expect(actual).toBe(expected);
      });

      test('then has mixture of zeros', () => {
        const actual = randomStartingCells.cells[0].some(
          (cellValue) => cellValue === 0
        );
        const expected = true;
        expect(actual).toBe(expected);
      });
    });
  });

  describe('Given height and width of zero', () => {
    const _height = 0;
    const _width = 0;

    describe('when creating RandomStartingCells', () => {
      let randomStartingCells: RandomStartingCells;

      beforeEach(() => {
        randomStartingCells = new RandomStartingCells(_height, _width);
      });

      test('then has Cells', () => {
        expect(randomStartingCells.cells).toBeDefined();
      });

      test('then has cells height of zero', () => {
        expect(randomStartingCells.cellsHeight).toEqual(0);
      });

      test('then has cells width of zero', () => {
        expect(randomStartingCells.cellsWidth).toEqual(0);
      });
    });
  });

  describe('Given height and width less than zero', () => {
    const _height = -1;
    const _width = -1;

    describe('when creating RandomStartingCells', () => {
      let randomStartingCells: RandomStartingCells;

      beforeEach(() => {
        randomStartingCells = new RandomStartingCells(_height, _width);
      });

      test('then has Cells', () => {
        expect(randomStartingCells.cells).toBeDefined();
      });

      test('then has matching negative height', () => {
        expect(randomStartingCells.cellsHeight).toEqual(-1);
      });

      test('then has matching negative width', () => {
        expect(randomStartingCells.cellsWidth).toEqual(-1);
      });
    });
  });
});
