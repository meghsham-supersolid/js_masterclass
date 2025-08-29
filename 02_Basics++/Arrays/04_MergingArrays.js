console.log("Using PUSH()");

const names1 = ["Rushikesh", "Ankita", "Vinayak", "Priyanka"];
const names2 = ["Meghsham", "Shrutika", "Soham", "Megha"];

for (let index = 0; index < names1.length; index++) {
  console.log(names1[index]);
}

console.log("\nAdding names2 to names1");

names1.push(names2);

for (let index = 0; index < names1.length; index++) {
  console.log(names1[index]);
}

console.log(`Length of name1 is ${names1.length}`);

for (let index = 0; index < names2.length; index++) {
  console.log(names2[index]);
}
console.log(`Length of name2 is ${names2.length}`);

// Here using push(), names2 is added to names1 as a element which creates a nested array, this does not create a new array just adds element of one array to another. affecting first array which takes just 1 new element

console.log("\n\nUsing CONCAT()");

const namesArr1 = ["Rushikesh", "Ankita", "Vinayak", "Priyanka"];
const namesArr2 = ["Meghsham", "Shrutika", "Soham", "Megha"];

for (let index = 0; index < namesArr1.length; index++) {
  console.log(namesArr1[index]);
}

console.log("\nConcatenating namesArr2 to namesArr1");

const concatArray = namesArr1.concat(namesArr2);

for (let index = 0; index < concatArray.length; index++) {
  console.log(concatArray[index]);
}

console.log(`Length of concatArray is ${concatArray.length}`);
console.log(namesArr1);
console.log(namesArr2);

// Here using concat(), names1 and names2 is added to concatArray and each elements of both arrays are element of concatArray separately, this entirely create new array and does not affect original arrays
