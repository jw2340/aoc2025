import run from "aocrunner";
import { ADJ_COORDINATES, isValidCoordinate } from "../utils/index.js";

const parseInput = (rawInput: string) => rawInput.split("\n");

const MAX_ALLOWED_ROLLS = 3;
const ROLL = "@";

const isValid = (grid: string[][], i: number, j: number) => {
  let total = 0;
  ADJ_COORDINATES.forEach((coordinate) => {
    const { x, y } = coordinate;
    const row = i + x;
    const col = j + y;
    if (isValidCoordinate(grid, row, col) && grid[row][col] === ROLL) {
      total += 1;
    }
  });
  return total <= MAX_ALLOWED_ROLLS;
};

const part1 = (rawInput: string) => {
  const lines = parseInput(rawInput);
  let total = 0;
  const grid: string[][] = [];
  lines.forEach((line) => {
    grid.push(line.split(""));
  });

  const cols = grid.length;
  for (let j = 0; j < cols; j++) {
    const rows = grid[j].length;
    for (let i = 0; i < rows; i++) {
      const val = grid[i][j];
      if (val === ROLL && isValid(grid, i, j)) {
        total++;
      }
    }
  }

  return total;
};

const getTotalAndUpdateGrid = (grid: string[][]) => {
  let total = 0;
  const coordinatesToUpdate = [];
  const cols = grid.length;
  for (let j = 0; j < cols; j++) {
    const rows = grid[j].length;
    for (let i = 0; i < rows; i++) {
      const val = grid[i][j];
      if (val === ROLL && isValid(grid, i, j)) {
        total++;
        coordinatesToUpdate.push({ i, j });
      }
    }
  }

  coordinatesToUpdate.forEach(({ i, j }) => {
    grid[i][j] = "x";
  });

  return total;
};

const part2 = (rawInput: string) => {
  const lines = parseInput(rawInput);
  let finalTotal = 0;
  const grid: string[][] = [];
  lines.forEach((line) => {
    grid.push(line.split(""));
  });

  while (true) {
    const total = getTotalAndUpdateGrid(grid);
    if (total === 0) break;
    finalTotal += total;
  }

  return finalTotal;
};

const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

run({
  part1: {
    tests: [
      {
        input,
        expected: 13,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input,
        expected: 43,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
