// ways to define a number

const numberValue = 1234567890;
console.log(numberValue); // 1234567890 value is number but not sure where its will be number only

const surlyNumberValue = new Number(1000);
console.log(surlyNumberValue); // [Number: 1000] js marks this variable as the number container only

const randomNumber = Math.floor(Math.random() * 1000000 + 1);
console.log(randomNumber);

//Number Functions
// Returns a string containing a number represented in exponential notation.
let exponentialNumber = numberValue.toExponential();
console.log(
  `Exponential Representation of ${randomNumber} is ${exponentialNumber}`
);

// Returns a string representing a number in fixed-point notation.
let fixedPointValue = randomNumber.toFixed(2);
console.log(
  `Fixed-Point Representation of ${randomNumber} is ${fixedPointValue}`
);

// Converts a number to a string by using the current or specified locale.

let localNumberString = randomNumber.toLocaleString("en-IN");
console.log(
  `Local String Representation of ${randomNumber} is ${localNumberString}`
);

// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
let precisionNumber = randomNumber.toPrecision(5);
console.log(
  `Precision Number Representation of ${randomNumber} is ${precisionNumber}`
);

console.log(`Minimum Value is Number is ${Number.MIN_VALUE}`);
console.log(`Maximum Value is Number is ${Number.MAX_VALUE}`);
console.log(`Max Safe Integer Value is Number is ${Number.MAX_SAFE_INTEGER}`);
console.log(`Epsilon value in Number is ${Number.EPSILON}`);
