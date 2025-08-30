/* 

Object Literals : 
This is the most common and straightforward way to create a single object. 

Syntax: 
    keyword objectRefVariable = {
        propertyKey1 : propertyValue1,
        propertyKeyN : propertyValueN,
    }

In object a key of property is always a string but we can write it without quote if its only single word with no white spaces, to explicit mark it as string we can make use of quotes

but when used quoted string with as key we can access it using dot operator for this case we can access it using squared brackets quoted string like index also known as squared notation

*/

// Example 1 : Simple object with properties and function

const myCar = {
  name: "Vision X",
  manufacturer: "Mahindra",
  releaseDate: Date(1, 0, 2030),
  milage: 25,

  showDetails: function () {
    console.log(
      `Name : ${this.name}, Manufacturer : ${this.manufacturer}, ReleaseDate : ${this.releaseDate}, Milage : ${this.milage}`
    );
  },
};

myCar.showDetails();

// Example 2 : Creating the object with key having white space

const myBike = {
  "bike name": "Royal Enfield Continental GT 650",
  "bike type": "cafe racer",
};

console.log(
  `My bike name is ${myBike["bike name"]} and its a ${myBike["bike type"]}`
);

// Example 3 : Creating object with a symbol used as key

// Step 1 : Creating a symbol key
const mySymbol = Symbol("This is a symbol description ");

// Step 2 : Using the defined symbol as key
const person = {
  firstName: "Meghsham",
  lastName: "Kapure",
  age: 29,
  [mySymbol]: "some unique symbol", // Step 3 : assigning a value to symbol key
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

console.log(
  `Name : ${person.firstName} ${person.lastName} and has age : ${person["age"]} with symbol value : ${person[mySymbol]}`
);
