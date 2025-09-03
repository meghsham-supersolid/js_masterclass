// unlike for and while, do-while first runs the code and then checks condition.
// Used in cases where body should be run at least once 

let i = 10;

do {
  console.log(++i);
} while (i < 10);
