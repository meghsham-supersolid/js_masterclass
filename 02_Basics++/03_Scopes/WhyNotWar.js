/*  
    1. Function-Scope (var): 
       - Variables declared with var are function-scoped. 
       - This means a variable declared inside a function is accessible throughout the entire function, including within any block statements like if or for inside same function.
       - Even if it’s declared inside a block, var does not respect block boundaries. It’s accessible inside function its contained in rather than block.
*/

function someFunction1() {
  if (true) {
    var iAmHappy = true;
    console.log(`A if block : iAmHappy : ${iAmHappy}`);
  }

  if (true) {
    iAmHappy = false;
    console.log(`B  if block : iAmHappy : ${iAmHappy}`);
  }
  iAmHappy = true;
  console.log(`inside function : iAmHappy : ${iAmHappy}`);
}
// someFunction1();
// console.log(` outside function : iAmHappy : ${iAmHappy}`); // ReferenceError: iAmHappy is not defined

/* 
    2. Block-Scoped (let and const):
        - let and const are block-scoped.
        - This means they are only accessible within the block (denoted by {}) in which they are declared.
        - If you declare a variable inside a block (such as an if statement or a loop), it will not be accessible outside of that block.
        accessible inside function its contained in rather than block.
*/

function someFunction2() {
  if (true) {
    let changingValue = 10;
    console.log(`A if block : changingValue : ${changingValue}`);
  }

  if (true) {
    // console.log(`B  if block : changingValue : ${changingValue}`); //ReferenceError: changingValue is not defined
  }

  //   console.log(`inside function : changingValue : ${changingValue}`); //ReferenceError: changingValue is not defined
}

someFunction2();

// console.log(`outside function : changingValue : ${changingValue}`); //ReferenceError: changingValue is not defined

// - There are two main types of scope based on where the variable is declared:
//     1. Global Scope: A variable declared outside of any function is accessible throughout the entire program. It’s considered to be in the global scope.
//     2. Local Scope: A variable declared inside a function is only accessible within that function. This is called local scope or function scope.
