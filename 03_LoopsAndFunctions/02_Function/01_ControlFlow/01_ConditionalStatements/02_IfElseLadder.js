/* 
With if-else ladder we can check multiple condition and all the condition are false the else block executes
*/

function gradeChecker(score) {
  if (score < 35) console.log("Failed");
  else if (score < 50) console.log("Passed with Grade D");
  else if (score < 70) console.log("Passed with Grade C");
  else if (score < 80) console.log("Passed with Grade B");
  else console.log("Passed with Grade A");
}

let student1Score = 25;
let student2Score = 48;
let student3Score = 65;
let student4Score = 75;
let student5Score = 95;

gradeChecker(student1Score);
gradeChecker(student2Score);
gradeChecker(student3Score);
gradeChecker(student4Score);
gradeChecker(student5Score);
