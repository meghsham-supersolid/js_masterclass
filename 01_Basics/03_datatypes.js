/*Premitive Data Types

1. Number : This is the most common numeric type and represents both integers and floating-point numbers.
    let pi = 3.14159265359;
    let thala = 7;

2. BigInt: handles extremely large integers that exceed the precision limits of the Number type.

 Note: In most of the cases only Number will used

3. Strings : 
    - Strings are useful for holding data that can be represented in text form.  
    - JS strings are primitive and immutable means All string methods produce a new string without altering the original string.
    - Strings can be created using:
        - Single quotes: 'Hello, World!'
        - Double quotes: "Hello, World!"
        - Backticks (template literals): `` Hello, World! ``

4. Boolean : represent either true or false, used for conditional checking

5. null : is standalone value and of data type object which represents a value that intentionally kept empty

6. undefined : is a value of type undefined which represents absence of value which might be available in future.
 note that, you may use null as value but undefined is always given by js

7. Symbol : represent value that is unique, used in react
    const idA = Symbol ('1');
    const idB = Symbol ('1');
    Although above id variables have same value inside it, symbol makes them different

    const A = Symbol("1");
    const B = A;
    console.log(A===B);

A Symbol is only equal to itself, unless retrieved via Symbol.for(), which uses a global registry.

Symbol.for() : JavaScript has a global symbol registry. When you use Symbol.for(key), it checks if a symbol with that key already exists in the global registry. If yes, it returns that symbol. If not, it creates a new one and stores it under that key.

The typeof is operator used to check the typeof things

*/
// let number = 123456;
// let name = "Meghsham";

// console.log(typeof number);
// console.log(typeof name);

/*

Referenced Types : 
    with this type variable point toward the memory location rather than value itself
        1. Arrays
        2. Objects
        3. Functions  
*/

let wholeNumberValue = 123;
console.log(typeof wholeNumberValue); // number

let floatingNumberValue = 12.34;
console.log(typeof floatingNumberValue); // number

let characterValue = "A";
console.log(typeof characterValue); //string

let stringValue = "Meghsham";
console.log(typeof stringValue); //string

let symbolValue = Symbol("Sham");
console.log(typeof symbolValue); // symbol

let undefinedValue = undefined;
console.log(typeof undefinedValue); //undefined

let nullValue = null;
console.log(typeof nullValue); // object

let booleanValue = true;
console.log(typeof booleanValue); //boolean

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // object

let map = {
  key1: "value1",
  key2: "value",
  key3: "value",
};
console.log(typeof map); //object
