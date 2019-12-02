const fs = require("fs");

var fuel = 0;

const calculateFuel = mass => {
  const roundedAndDivided = Math.floor(mass / 3);
  const currentFuel = roundedAndDivided - 2;
  if (currentFuel > 0) {
    fuel += currentFuel;
    calculateFuel(currentFuel);
  }
};

const readValues = () => {
  const files = fs.readFileSync("data.txt").toString();
  const numbers = files.split("\r\n");
  numbers.forEach(numberNotParsed => {
    const parsedNumber = parseInt(numberNotParsed);
    calculateFuel(parsedNumber);
  });
  console.log(fuel);
};
readValues();
