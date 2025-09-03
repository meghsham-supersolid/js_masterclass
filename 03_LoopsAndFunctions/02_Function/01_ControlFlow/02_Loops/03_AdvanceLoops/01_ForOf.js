// for of loop works on the objects that are iterable like objects arrays, strings

// with arrays
const heroes = ["shaktiman", "krish", "junier-g", "ajooba", "shenshah"];
console.log("My heroes are : ");

for (const hero of heroes) {
  console.log(`\t ${hero}`);
}

// with string

const nameString = "Meghsham Kapure.";

console.log("Characters in my name is ");

for (const char of nameString) {
  console.log(`\t ${char}`);
}

// with object

const person = {
  firstname: "Meghsham",
  lastname: "Kapure",
  city: "Pune",
  age: 29,
};

console.log("Properties and their values in person object is : ");

// Object.keys ( person) returns an array object which contains array of keys in object person

for (const prop of Object.keys(person)) {
  console.log(`${prop} : ${person[prop]}`);
}


