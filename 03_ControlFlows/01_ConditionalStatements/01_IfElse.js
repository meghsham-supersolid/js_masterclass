/*
    if takes a condition, it that condition is true then if block is executed otherwise else block is executed
*/

let ageOfA = 17;
let ageOfB = 18;
let ageOfC = 19;

function validateVoter(age) {
  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("You can not vote");
  }
}

validateVoter(ageOfA);
validateVoter(ageOfB );
validateVoter(ageOfC);
