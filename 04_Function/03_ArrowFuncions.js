/* 
Arrow Function is a shorter code way to write function

Syntax :
    keyword variableName =  (parameterList) => {functionBody} ;
    variableName (argumentsList);
*/

// Example arrow function with explicit return value

const value1 = 10;
const value2 = 20;

const add1 = (value1, value2) => {
  return value1 + value2;
};

console.log(
  `Addition of  ${value1} + ${value2} = ${add1(value1, value2)} using add1 `
);

// Example arrow function with implicit return value with no brackets

const add2 = (value1, value2) => value1 + value2; // as the code is single line only we can discard {} and return keyword

console.log(
  `Addition of  ${value1} + ${value2} = ${add2(value1, value2)} using add2`
);

// Example arrow function with implicit return value with parenthesis

const giveName = (value1, value2) => ({ name: "Meghsham" });
// as the code is single line only we can discard {} and return keyword and replace it with parenthesis (), this mostly use in react, to return object
// to return object you will use curly braces and when js sees {} it looks for return keyword so when return a object like {key:value} you use ({key:value}) to return object
console.log(`My name is ${giveName().name} using giveName`);

// this and arrow function

const myArrowFunction = () => {
  const myName = "Meghsham";
  console.log(this.myName); // gives undefined as myName is part of function not object
  console.log(this); // give {} an empty object given by node execution context
};
myArrowFunction();
