/**
 * In JS we can store function inside variable and call them using variable name instead of function name
 */

// normal function

// when called takes a value and adds 10 in value
function plusTen(num) {
  return num + 10;
}

console.log(plusTen(5));
console.log(plusTen(10));
console.log(plusTen(15));
console.log();

// replicating same function and output but with function expression

const functionContainerPlusTen = function plusTen(num) {
  return num + 10;
};

// now we can call it using variable name

console.log(functionContainerPlusTen(5));
console.log(functionContainerPlusTen(10));
console.log(functionContainerPlusTen(15));
console.log();

// both works the same but there is a difference

// with straight-forward function declaration we can call them before defining them, this is possible because execution context and js hoisting
console.log(minusFive(5));
console.log(minusFive(10));
console.log(minusFive(15));
console.log();

function minusFive(num) {
  return num - 5;
}

// with function expression we can't call them before defining them, if done then gives ReferenceError

// console.log(functionContainerMinusFive(5)); // ReferenceError: Cannot access 'functionContainerMinusFive' before initialization
// console.log(functionContainerMinusFive(10));
// console.log(functionContainerMinusFive(15));
console.log();

const functionContainerMinusFive = function minusFive(num) {
  return num - 5;
};
