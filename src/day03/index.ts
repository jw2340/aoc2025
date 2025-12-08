import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total = 0;
  input.forEach((line) => {
    const nums = line.split("").map(Number);
    let max = 0;
    let maxIdx = 0;
    let secondMax = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > max) {
        max = nums[i];
        maxIdx = i;
      }
    }
    for (let i = maxIdx + 1; i < nums.length; i++) {
      if (nums[i] > secondMax) {
        secondMax = nums[i];
      }
    }
    total += max * 10 + secondMax;
  });

  return total;
};

const getMaxAndIndex = (nums: number[], idx: number) => {
  let max = 0;
  let maxIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIdx = i;
    }
  }
  // console.log({ nums, max, maxIdx: maxIdx + idx });
  return { max, maxIdx: maxIdx + idx };
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total = 0;
  input.forEach((line) => {
    const nums = line.split("").map(Number);
    let digitsLeft = 12;
    let result = 0;
    let idx = 0;
    while (digitsLeft > 0) {
      // console.log({
      //   digitsLeft,
      //   start: idx,
      //   end: nums.length - digitsLeft + 1,
      // });
      const { max, maxIdx } = getMaxAndIndex(
        nums.slice(idx, nums.length - digitsLeft + 1),
        idx,
      );
      idx = maxIdx + 1;
      digitsLeft--;
      result += max * Math.pow(10, digitsLeft);
    }
    // console.log({ result });
    total += result;
  });
  return total;
};

const input = `987654321111111
811111111111119
234234234234278
818181911112111`;

run({
  part1: {
    tests: [
      {
        input,
        expected: 357,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input,
        expected: 3121910778619,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
