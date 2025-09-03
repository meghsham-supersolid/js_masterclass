// ternary operator is short hand notation of if else block used write conditional operation in short
// condition ? do this : or do this ;

let num1 = 10;
let num2 = 11;

const evenOrOdd = (num) =>
  `${num} is ${num % 2 == 0 ? "Even Number" : "Odd Number"}`;

console.log(evenOrOdd(num1));
console.log(evenOrOdd(num2));
