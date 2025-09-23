// function setUser(username) {
//     // complex DB calls and calculations
//     this.username = username;
//     return this;
// }

// function createUser(username, email, password) {
//     setUser.call(this, username);
//     this.email = email;
//     this.password = password;
// }

// const user = new createUser("meghsham", "meghsham@gmail.com", "Pass1234");
// console.log(user);

// console.log(this.username);


// const globalEC = this;

// function parent() {
//     const parentEC = this;
//     console.log("Parent Function called");

//     function child() {
//         const childEC = this;
//         console.log("Child Function called");

//         console.log(globalEC === parentEC);
//         console.log(childEC === parentEC);

//     }

//     child();
// }

// parent();

function sayHi(greeting, emoji) {
    console.log(`${greeting}, I'm ${this.name}! ${emoji}`);
}

const person1 = { name: "Bob" };
const person2 = { name: "Alice" };
const person3 = { name: "Richie" };

// call
sayHi.call(person1, "Hey", "🚀");


// apply
sayHi.apply(person2, ["Hello", "😊"]);

// bind
const sayHiToRichie = sayHi.bind(person3, "Good Morning", "☀️");
sayHiToRichie();
