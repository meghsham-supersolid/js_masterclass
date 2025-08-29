/*
Creating an js array

keyword arrName = []
or
keyword arrName = [element1,element1... elementN];
or
keyword arrName = new Array(element1,element1... elementN);

JS arrays is object  which is dynamic means can grow in size 
and is capable of having elements that are of different type under single variable 

elements of an array can be access using integer indexes which starts from array index 0, if invalid index element is accessed then return undefined as value
 */

const myArr = ["Meghsham", 29, true, Symbol("He is GOAT")];
console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);

/*
 JS array when copied create shallow copies of array, so when any of the array elements are modified the other array also affected with the change.
*/

const originalArr = [0, 1, 2, 3, 4, 5];
const duplicateArr = originalArr;

console.log(
  `Before modification originalArr : ${originalArr} and duplicateArr :  ${duplicateArr}`
);

for (let index = 0; index < originalArr.length; index++) {
  if (index % 2 != 0) {
    originalArr[index] *= 10;
  }
}
console.log(
  `After modification 1 originalArr:  ${originalArr} and duplicateArr:  ${duplicateArr}`
);

for (let index = 0; index < duplicateArr.length; index++) {
  if (index % 2 == 0) {
    duplicateArr[index] *= 10;
  }
}

console.log(
  `After modification 2 originalArr:  ${originalArr} and duplicateArr:  ${duplicateArr}`
);


