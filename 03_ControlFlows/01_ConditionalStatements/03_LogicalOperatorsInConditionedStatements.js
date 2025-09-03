// We can use multiple conditions with logical operators

// NOT operator ! : used to reverse the result from true to false and vice-versa

let flag = false;

if (!flag) {
  console.log("flag is true");
} else {
  console.log("flag is false");
}

// AND operator : used to check multiple condition where all the conditions has to be true to generate true result value

// Example : find the numbers fom 1 to 100 that are divisible by 2,3 and 4

let dividedNumbers = [];
for (let index = 0; index < 100; index++) {
  if ((index % 2 == 0) && (index % 3 == 0) && (index % 4 == 0))
    dividedNumbers.push(index);
}

console.log(dividedNumbers);

// OR operator : used to check multiple condition where one of condition has to be true to generate true result value

const names = [
  "Shubham",
  "Vishal",
  "Tanmay",
  "Sagar",
  "Mayuresh",
  "Meghsham",
  "Mayur",
  "Suchant",
  "Sagar",
  "Chirah",
  "Nitesh",
  "Viraj",
];

const startWithMS = [];
for (let index = 0; index < names.length; index++) {
  let name = names[index];
  if (name.toLowerCase().startsWith("m") || name.toLowerCase().startsWith("s"))
    startWithMS.push(name);
}

console.log(startWithMS);
