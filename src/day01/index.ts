import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let currentNum = 50;
  let result = 0;
  input.forEach((val) => {
    const rotation = val[0];
    const num = Number(val.slice(1));
    if (rotation === "L") {
      currentNum = (((currentNum - num) % 100) + 100) % 100;
    } else if (rotation === "R") {
      currentNum = (currentNum + num) % 100;
    }
    if (currentNum === 0) {
      result += 1;
    }
  });
  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let currentNum = 50;
  let result = 0;
  input.forEach((val) => {
    const rotation = val[0];
    const num = Number(val.slice(1));
    let multiples = 0;
    if (rotation === "L") {
      if (currentNum - num <= 0) {
        multiples = Math.floor(Math.abs(currentNum - num) / 100);
        if (currentNum != 0) {
          multiples += 1;
        }
      }
      currentNum = (((currentNum - num) % 100) + 100) % 100;
    } else if (rotation === "R") {
      if (currentNum + num >= 100) {
        multiples = Math.floor((currentNum + num) / 100);
      }
      currentNum = (currentNum + num) % 100;
    }
    result += multiples;
    // console.log({ val, currentNum, result });
  });
  return result;
};

const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

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
        expected: 6,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
