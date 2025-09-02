/* 
- if statement checks whether the give condition is true, if it is then executes or simple skips the block
- for giving condition we can use comparisons or logical operator which generates value in boolean or values that can be casted to boolean values
*/

function turnOnAc(temp, room) {
  if (temp > 35) {
    console.log(`${room} Turn on AC`);
  }
}

let tempInRoom1 = 34;
turnOnAc(tempInRoom1, "Room 1");

let tempInRoom3 = 36;
turnOnAc(tempInRoom3, "Room 3");
