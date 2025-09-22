/* 
    * In JS, with every object `Prototype` property is attached, and this property points to another object which also has `Prototype` in it.
    * This loop continues till the top-most object point to null
    * This prototype chain allows objects to inherit properties and methods from other objects, which forms  prototypal inheritance between objects.
*/

// Create a prototype object
const superheroPrototype = {
    fly() {
        console.log(`${this.name} is flying!`);
    },
    fight() {
        console.log(`${this.name} is fighting with ${this.power}!`);
    },
};

// creates new objects linked to the prototype means param superheroPrototype will be prototype for newly created object
const ironMan = Object.create(superheroPrototype);
ironMan.name = "Iron Man";
ironMan.power = "Repulsor Beams";

// Create another superhero object
const thor = Object.create(superheroPrototype);
thor.name = "Thor";
thor.power = "Mjolnir";

ironMan.fly(); // Output: Iron Man is flying!
ironMan.fight(); // Output: Iron Man is fighting with Repulsor Beams!

thor.fly(); // Output: Thor is flying!
thor.fight(); // Output: Thor is fighting with Mjolnir!

// so every object created by `Object.create(superheroPrototype)` by have its prototype superheroPrototype
