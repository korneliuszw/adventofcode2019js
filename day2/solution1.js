const fs = require("fs");
const readValues = () => {
  const files = fs.readFileSync("data.txt").toString();
  var numbers = files.split(",");
  var parsedNumbers = [];
  numbers.forEach(number => {
    parsedNumbers.push(parseInt(number));
  });
  numbers = parsedNumbers;
  numbers[1] = 12;
  numbers[2] = 2;
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
      console.log(numbers[0]);
      break;
    }
    i = i + 4;
  }
};
readValues();
