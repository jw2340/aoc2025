import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split(",");

const isInvalid = (num: number) => {
  const numString = num.toString();
  if (numString.length % 2 != 0) return false;
  const firstHalf = numString.slice(0, numString.length / 2);
  const secondHalf = numString.slice(numString.length / 2);
  return firstHalf === secondHalf;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total = 0;
  input.forEach((val) => {
    const nums = val.split("-");
    const num1 = Number(nums[0]);
    const num2 = Number(nums[1]);
    for (let i = num1; i <= num2; i++) {
      if (isInvalid(i)) {
        total += i;
      }
    }
  });
  return total;
};

const isRepeating = (num: number) => {
  const numString = num.toString();
  const chunks = numString.length - 1;
  for (let chunk = 1; chunk <= chunks; chunk++) {
    if (numString.length % chunk != 0) continue;
    let current;
    for (let i = 0; i < numString.length; i += chunk) {
      const prev: string | undefined = current;
      current = numString.slice(i, i + chunk);
      if (prev != undefined && prev !== current) break;
      if (i + chunk === numString.length) return true;
    }
  }
  return false;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total = 0;
  input.forEach((val) => {
    const nums = val.split("-");
    const num1 = Number(nums[0]);
    const num2 = Number(nums[1]);
    for (let i = num1; i <= num2; i++) {
      if (isRepeating(i)) {
        total += i;
      }
    }
  });
  return total;
};

const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

run({
  part1: {
    tests: [
      {
        input,
        expected: 1227775554,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input,
        expected: 4174379265,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
