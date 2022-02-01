import { GameOfLife } from './gameOfLife';

describe('GameOfLife tests', () => {
  describe('Given a new game', () => {
    let game: GameOfLife;

    beforeEach(() => {
      game = new GameOfLife();
    });

    describe('and a 3x3 grid', () => {
      describe('and all dead cells', () => {
        const startingCells = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ];

        describe('when getting the next generation', () => {
          let nextGeneration: readonly (readonly number[])[];

          beforeEach(() => {
            nextGeneration = game.getNextGeneration(startingCells);
          });

          test('the cells should remain all dead', () => {
            const expected = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ];
            expect(nextGeneration).toEqual(expected);
          });
        });
      });

      describe('and a single live cell', () => {
        const startingCells = [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0],
        ];

        describe('when getting the next generation', () => {
          let nextGeneration: readonly (readonly number[])[];

          beforeEach(() => {
            nextGeneration = game.getNextGeneration(startingCells);
          });

          test('then the live cell would have died from loneliness :(', () => {
            const expected = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ];
            expect(nextGeneration).toEqual(expected);
          });
        });
      });

      describe('and two dead cells with three live neighbours', () => {
        const startingCells = [
          [0, 0, 0],
          [1, 1, 1],
          [0, 0, 0],
        ];

        describe('when getting the next generation', () => {
          let nextGeneration: readonly (readonly number[])[];

          beforeEach(() => {
            nextGeneration = game.getNextGeneration(startingCells);
          });

          test('then should bring two cells to life', () => {
            const expected = [
              [0, 1, 0],
              [0, 1, 0],
              [0, 1, 0],
            ];
            expect(nextGeneration).toEqual(expected);
          });
        });
      });

      describe('and a live cell with two live neighbours', () => {
        const startingCells = [
          [1, 1, 1],
          [0, 0, 0],
          [0, 0, 0],
        ];

        describe('when getting the next generation', () => {
          let nextGeneration: readonly (readonly number[])[];

          beforeEach(() => {
            nextGeneration = game.getNextGeneration(startingCells);
          });

          test('then should keep that cell alive', () => {
            const expected = [
              [0, 1, 0],
              [0, 1, 0],
              [0, 0, 0],
            ];
            expect(nextGeneration).toEqual(expected);
          });
        });
      });

      describe('and a live cell with more than three neighbours', () => {
        const startingCells = [
          [1, 0, 1],
          [0, 1, 0],
          [1, 0, 1],
        ];

        describe('when getting the next generation', () => {
          let nextGeneration: readonly (readonly number[])[];

          beforeEach(() => {
            nextGeneration = game.getNextGeneration(startingCells);
          });

          test('then should kill that cell due to overcrowding', () => {
            const expected = [
              [0, 1, 0],
              [1, 0, 1],
              [0, 1, 0],
            ];
            expect(nextGeneration).toEqual(expected);
          });
        });
      });

      describe('and all live cells', () => {
        const startingCells = [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ];

        describe('when getting the next generation', () => {
          let nextGeneration: readonly (readonly number[])[];

          beforeEach(() => {
            nextGeneration = game.getNextGeneration(startingCells);
          });

          test('then should have a cross of dead cells', () => {
            const expected = [
              [1, 0, 1],
              [0, 0, 0],
              [1, 0, 1],
            ];
            expect(nextGeneration).toEqual(expected);
          });
        });
      });
    });
  });
});
