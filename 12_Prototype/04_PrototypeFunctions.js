// function sayHello(name) {
//     this.address = "pune";
//     console.log(this.address);

//     return `${name} , have a great day ahead ${sayHello.from == undefined ? "Admin" : sayHello.from}`
// }

// console.log(sayHello("hitesh"));

// sayHello.from = "Meghsham"; // a property called from is added to sayHello function

// console.log(sayHello("hitesh"));


// // function also is object in js so it also has its prototype

// console.log(sayHello);

// console.log(sayHello.prototype);

// console.log(this.address);



// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is  called with the specified arguments and this is bound to the newly created object.If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been cal led, if it doesn't return a non—primitive value (object, array, function, etc.), the newly created object is returned.




// function whatIsYourProfession(isSpartan) {
//     if (isSpartan)
//         console.log("Hauuuuuu Hauuuuuu Hauuuuuu !!! ");

//     this.fight = () => console.log("I will stand till my last breath");
//     whatIsYourProfession.prototype.run = () => console.log("not a chance baby");

// }
// fight = this.fight;
// run = this.prototype.run;

// fight();
// run();


// function whatIsYourProfession(isSpartan) {
//     if (isSpartan)
//         console.log("Hauuuuuu Hauuuuuu Hauuuuuu !!! ");

//     this.fight = () => console.log("I will stand till my last breath");
//     whatIsYourProfession.prototype.run = () => console.log("not a chance baby");
// }

// const warrior = new whatIsYourProfession(true);

// warrior.fight(); // "I will stand till my last breath"
// warrior.run();   // "not a chance baby"

// console.log(warrior);


// const fun1 = function functionOne() {
//     this.functionName = "Function One"
// }

// const fun2 = new function functionTwo() {
//     this.functionName = "Function Two"
// }

// fun1();
// // fun2();

// console.log(fun1.functionName);
// console.log(fun2.functionName);


String.prototype.trueLength = function () {
    return this.trim().length
}

console.log("   Meghsham    ".trueLength());


