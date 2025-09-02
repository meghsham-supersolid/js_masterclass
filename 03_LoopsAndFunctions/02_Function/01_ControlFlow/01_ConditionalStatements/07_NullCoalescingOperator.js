// Null Coalescing Operator  used to return its right-hand side operand value (some default value) if its left-hand side operand is either null or undefined, and otherwise returns its left-hand side operand.

function returnSomeValue() {
  const randomValue = Math.floor(Math.random() * 100);
  console.log(randomValue);

  if (randomValue == 0) return null;
  else if (randomValue % 5 == 0) return undefined;
  else return randomValue;
}

let getValue = returnSomeValue();

console.log(getValue ?? -1);
