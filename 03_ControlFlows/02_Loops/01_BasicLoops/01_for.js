/*
Syntax
    for (initialValue; conditionCheck; incDec) {
        // loop body
    }
*/

for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

// starts from i = 0;
// checks i<10 if true then execute the loop body or exit loop.
                  
// increment or decrement

// Nested loop

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("Outer loop : " + i + " Inner Loop : " + j);
  }
}
