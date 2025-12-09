import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const lines = parseInput(rawInput);
  const points: { val: number; isStart: boolean }[] = [];
  const ingredients: number[] = [];

  lines.forEach((line) => {
    if (line.includes("-")) {
      const [first, second] = line.split("-").map(Number);
      points.push({ val: first, isStart: true });
      points.push({ val: second, isStart: false });
    }

    if (line !== "" && !line.includes("-")) {
      ingredients.push(Number(line));
    }
  });

  points.sort((a, b) => {
    if (a.val > b.val) {
      return 1;
    } else if (a.val < b.val) {
      return -1;
    } else if (a.val === b.val && a.isStart) {
      return -1;
    } else if (a.val === b.val && !a.isStart) {
      return 1;
    }
    return 0;
  });

  let count = 0;
  const intervals: number[][] = [];
  let start;
  let end;
  for (let i = 0; i < points.length; i++) {
    if (count === 0) {
      start = points[i].val;
    }
    const { val, isStart } = points[i];
    if (isStart) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === 0 && start) {
      end = points[i].val;
      intervals.push([start, end]);
    }
  }

  let freshCount = 0;
  ingredients.forEach((ingredient) => {
    intervals.forEach(([start, end]) => {
      if (ingredient >= start && ingredient <= end) {
        freshCount += 1;
      }
    });
  });

  return freshCount;
};

const part2 = (rawInput: string) => {
  const lines = parseInput(rawInput);
  const points: { val: number; isStart: boolean }[] = [];

  lines.forEach((line) => {
    if (line.includes("-")) {
      const [first, second] = line.split("-").map(Number);
      points.push({ val: first, isStart: true });
      points.push({ val: second, isStart: false });
    }
  });

  points.sort((a, b) => {
    if (a.val > b.val) {
      return 1;
    } else if (a.val < b.val) {
      return -1;
    } else if (a.val === b.val && a.isStart) {
      return -1;
    } else if (a.val === b.val && !a.isStart) {
      return 1;
    }
    return 0;
  });

  let count = 0;
  const intervals: number[][] = [];
  let start;
  let end;
  for (let i = 0; i < points.length; i++) {
    if (count === 0) {
      start = points[i].val;
    }
    const { val, isStart } = points[i];
    if (isStart) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === 0 && start) {
      end = points[i].val;
      intervals.push([start, end]);
    }
  }

  let freshCount = 0;
  intervals.forEach(([start, end]) => {
    freshCount += end - start + 1;
  });

  return freshCount;
};

const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

run({
  part1: {
    tests: [
      {
        input,
        expected: 3,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input,
        expected: 14,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
