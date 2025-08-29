const numArr = [1, 4, 2, 7, 5, 3, 8, 6, 9];

// Questioner methods are used ask questions to the array and get result

console.log(`Does the array contains 0 : ${numArr.includes(0)}`);
console.log(`Does the array contains 0 : ${numArr.includes(8)}`);
console.log();

console.log(`Does the array contains 0 : ${numArr.indexOf(0)}`);
console.log(`Does the array contains 0 : ${numArr.indexOf(9)}`);
console.log();

//Converting array in String
const arr1 = [1, 2, 3, 4];
console.log(typeof arr1);
const arrayInSting1 = arr1.join();
const arrayInSting2 = arr1.toString();

console.log(`arrayInSting1 : ${typeof arrayInSting1} :  ${arrayInSting1}`);
console.log(`arrayInSting2 : ${typeof arrayInSting1} :  ${arrayInSting1}`);

//both method toString and join convert the array in string NEED MORE CLARITY

const something = "Random Text";

console.log(`is something is array : ${Array.isArray(something)}`);

const arrSomething = Array.from(something);
console.log(`Creating array from something: ${arrSomething}`);
//using Array.from() we can create arrays from an single iterable object like strings.

const arrSomething2 = Array.from({ key: "value" });
console.log(`Creating array from something2: ${arrSomething2}`);
//but if it fails it will either give error or give null array as return

const arrSomething3 = Array.of({ key1: "value1" }, { key2: "value2" });
console.log(`Creating array from multiple maps: ${arrSomething3}`);

const arrSomething4 = Array.of(something + 1, something + 2);
console.log(`Creating array multiple variables: ${arrSomething4}`);
