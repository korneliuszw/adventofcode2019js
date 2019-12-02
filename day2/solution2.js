const fs = require("fs");
const readValues = (noun, verb) => {
  if (verb > 99) {
    readValues(noun + 1, 1);
  }
  var numbers = parseFromFile();
  numbers[1] = noun;
  numbers[2] = verb;
  const isEqual = calculateValues(numbers);
  if (isEqual) {
    console.log(100 * numbers[1] + numbers[2]);
    process.exit(0);
  } else readValues(noun, verb + 1);
};
const calculateValues = numbers => {
  let i = 0;
  while (i < numbers.length) {
    const code = numbers[i];
    const outputPosition = numbers[i + 3];
    if (code === 1) {
      numbers[outputPosition] =
        numbers[numbers[i + 1]] + numbers[numbers[i + 2]];
    } else if (code === 2) {
      numbers[outputPosition] =
        numbers[numbers[i + 1]] * numbers[numbers[i + 2]];
    } else if (numbers[i] === 99) {
      break;
    }
    i = i + 4;
  }
  return numbers[0] === 19690720;
};

const parseFromFile = () => {
  const files = fs.readFileSync("data.txt").toString();
  var numbers = files.split(",");
  var parsedNumbers = [];
  numbers.forEach(number => {
    parsedNumbers.push(parseInt(number));
  });
  return parsedNumbers;
};
readValues(1, 1);
