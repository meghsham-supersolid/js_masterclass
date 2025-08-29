const myArr = [];

console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);

//Adding element to end array

console.log();
console.log(`Adding element to end array using push()`);
console.log();

myArr.push(1);
console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);

myArr.push(2);
console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);

console.log();
console.log(`Deleting element from end array using pop()`);
console.log();

//Deleting element from end array

myArr.pop();
console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);

myArr.pop();
console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);

console.log();
console.log(`Adding element to front of array using unshift()`);
console.log();

//Adding element to front of array
myArr.unshift(10);
console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);

myArr.unshift(20);
console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);

console.log();
console.log(`Removing element from front of array using shift()`);
console.log();

myArr.shift();
console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);

myArr.shift();
console.log(
  `myArr[]  looking like [${myArr}] and has ${myArr.length} elements`
);
