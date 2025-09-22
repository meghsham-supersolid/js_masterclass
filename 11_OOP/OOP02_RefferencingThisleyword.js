// referencing this in node global context

console.log(`Inside global context : `);
console.log(this);

/*
Global Context (Top-Level Code)

In Browser, the `this` keyword refers to the global `window` object.
It is used to access global variables and functions.

In Node.js, the `this` keyword refers to `{}`, which is the module's exports object,
not the global object, because Node wraps each file in a module scope.
*/

// referencing this in function context
function someFunction() {
    console.log("Inside a function : ");
    console.log(this);
}
someFunction();

/*
Function Context (Non-Strict Mode)

In both Browser and Node.js, when a function is called in the global scope (not as a method of an object),
`this` inside that function refers to the global object:
- In Browser, it is the `window` object.
- In Node.js, it is the `global` object.

If the function were called as a method of an object, then `this` would refer to that object instead.
*/
