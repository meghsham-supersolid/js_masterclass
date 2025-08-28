//  Converting values in JS is simple yet can create mishaps as it does not give error while doing invalid conversions, but when use this invalid value generated it may crash the program as JS have type specific functions

let a = "101";
// this a number wrapped in string which can converted to a number

let aInNumber = Number(a);
console.log(`a=${a} is a ${typeof a}`);
console.log(`aInNumber=${aInNumber} is a ${typeof aInNumber}`);

// but when it comes to invalid conversion like below

let b = "452362lG";

let bInNumber = Number(b);
// this get converted but the converted value is invalid so JS marks it as NaN [Not A Number]

console.log(`b=${b} is a ${typeof b}`);
console.log(`bInNumber=${bInNumber} is a ${typeof bInNumber}`);

// this is JS loose conversion

let nullValue = null;
let undefinedValue = undefined;
let booleanValue = false;

console.log("Converting null in Numbers = " + Number(nullValue));
console.log("Converting undefined in Numbers = " + Number(undefinedValue));
console.log("Converting boolean in Numbers = " + Number(booleanValue));

// Note : NaN in JS is value of Number type

//Likewise in Number we can covert the values to other DT also

let isLoggedIn = true;
console.log(`isoggedIn is number is ${Number(isLoggedIn)}`);

/* Note:
   - JavaScript is also a class-based language where types are associated with their respective classes.
   - Wrapping a variable in a class constructor will convert the value to that class's type.
*/

