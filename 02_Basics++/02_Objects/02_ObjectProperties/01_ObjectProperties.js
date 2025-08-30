// Accessing the value
//  1. Using dot operator eg. objReference.propertyName
//  2. Using squared notation eg. objReference["propertyName"]
const idSymbol = Symbol("symbol holds id");
const person = {
  firstName: "Meghsham",
  lastName: "Kapure",
  "current location": "Pune MH",
  age: 29,
  [idSymbol]: "AD-09091998",
  sayHello: function () {
    console.log(`Hey, ${this.firstName}!!!`);
  },
};

console.log(`Name : ${person.firstName} ${person.lastName} `); // dot operator
console.log(
  `Current location is ${person["current location"]} and id is ${person[idSymbol]}`
); // Squared Notation

// Overwriting properties value
//    1. Using dot operator eg. objReference.propertyName = value
//    2. Using squared notation eg. objReference["propertyName"] =value

person.firstName = "Madhuri";
person.lastName = "Dikshit";
person[idSymbol] = "MD-14121985";
person["current location"] = "Mumbai MH";
person.sayHello = function () {
  console.log(`Hey, ${this.firstName}${this.lastName}!!!`);
};

// Object.freeze(objReference) : Stop any modifications to properties after using of this
Object.freeze(person);

// Object.isFrozen(objReference) : Checks whether the object passed is frozen or not and returns the result in boolean
console.log("Is object is frozen : " + Object.isFrozen(person));

person.firstName = "John";
person.lastName = "Doe";
// the object will not have newer value because it was frozen and can't be changed afterwords

// Adding properties to existing object
const player = {};
player.firstName = "Virat";
player.lastName = "Kohli";

// Printing Object
console.log("Displaying player object :");
console.log(player);

// Adding object as property in object

const user = {
  person: person,
  player: player,
};

// checking whether object has or not property defined already with object.hasOwnProperty('propertyName');

console.log(
  `Does user has property 'isLoggedIn' : ${user.hasOwnProperty("isLoggedIn")}`
);

console.log(
  `Does user has property 'player' : ${user.hasOwnProperty("player")}`
);
// accessing nested object properties
console.log(user.person.firstName);
console.log(user.player.firstName);

// Suppose you have received an object from a API response and you are not sure that where the properties you are trying to access is available or not, but still you are accessing them, in that case you have to handle this value that can undefined or null

const response = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

console.log(
  `ID : ${response.id}, UserName: ${
    response.userName == undefined ? "DefaultUser" : response.userName
  }, TaskTitle: ${response.title}, TaskIsCompleted : ${response.completed}`
);

// Combining the objects into one object

const objectOne = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3.0",
};

const objectTwo = {
  prop3: "value3.1",
  prop4: "value4",
};

const objectThree = {
  prop5: "value5",
  prop6: "value6",
};

// Combining objects using Object.assign
const masterObject1 = Object.assign({}, objectOne, objectTwo, objectThree);
console.log(masterObject1);

// Combining objects using Spread operator
const masterObject2 = { ...objectOne, ...objectTwo, ...objectThree };
console.log(masterObject2);

const tasks = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

const keys = Object.keys(tasks[0]);
const values = Object.values(tasks[0]);
const entries = Object.entries(tasks[0]);

console.log(`Keys : ${keys}`); //  userId,id,title,completed
console.log(`Values : ${values}`); // 1,1,delectus aut autem,false
console.log(`Entries : ${entries}`); // userId,1,id,1,title,delectus aut autem,completed,false
