# Beginner-Friendly Notes on JavaScript Prototypes, Inheritance, and More

## 1. What is a Prototype in JavaScript?
   - In JS, every object (like arrays, strings, or custom things you create) has a prototype property  If during execution of JS program, it can't find a property or method on the object itself, it looks at its prototype property. This keeps going up a "chain" until it finds it or reaches the end (null) like Imagine a kid (your object) who doesn't have a toy. They ask their mom (prototype), who asks grandma (next prototype), and so on. If no one has it, you get "undefined."
   - Prototypes help share code efficiently. Instead of copying methods (like `map()` for arrays) into every object, JS links them via prototypes to save memory.
   - **Extra Point for Beginners**: Prototypes are NOT the same as classes in other languages like Java. JS uses "prototypal inheritance" (more on this later), which is flexible but different.

   **Quick Demo in Browser Console**:
   - Open your browser's console (right-click > Inspect > Console).
   - Type: `let arr = ["apple", "banana"];`
   - Expand `arr` in the console: You'll see elements, `length`, and `__proto__` (that's the prototype with methods like `push()`, `map()`).
   - Chain: Array's prototype points to Object's prototype, which ends at `null`.
	   ![[Pasted image 20250922101258.png]]

## 2. The Prototype Chain
- Prototype Chain is the "lookup path" JS follows. 
- It Start with your `current object` → its `prototype` → that `prototype's prototype` → ... → `Object.prototype` → null.
- JS "inherits" methods from up the chain. That's why an array can use Object methods like `toString()`.If you add something to `Object.prototype`, it affects **everything** in JS (arrays, strings, functions).
   - - `prototype` → lives on functions. Used for inheritance.
   - `__proto__` → lives on objects. Points to the prototype object they inherit from.
   - **Example**:
   ```javascript
	   let myString = "Hello";  // A string object
	   console.log(myString.length);  // 5 (found on String.prototype)
	   console.log(myString.toUpperCase());  // "HELLO" (found on String.prototype)
	   console.log(myString.valueOf());  // "Hello" (found on Object.prototype)
	   ```
   - If `length` wasn't on `myString`, JS checks `String.prototype`, then `Object.prototype.`
## 3. Functions Are Objects Too!
   - In JS, functions aren't just code—they're special objects. You can add properties to them like you would to an array or object.
   - Every function has a `prototype` property (an empty object `{}` by default). You can add methods to it for sharing. This is why JS is "object-oriented" in a unique way—everything links back to objects.

   **Example**:
   ```javascript
   function sayHello(name) {
     return "Hello, " + name;
   }
   sayHello.favoriteColor = "blue";  // Add a property like it's an object
   console.log(sayHello("Friend"));  // "Hello, Friend" (runs as function)
   console.log(sayHello.favoriteColor);  // "blue" (acts as object)
   console.log(sayHello.prototype);  // {} (its prototype object)
   ```

## 4. The 'this' Keyword
   - 'this' points to current object in context.
   - In functions, it avoids confusion when multiple objects share the same code and similar identifier.
   - **Extra Point for Beginners**: 'this' can change based on how you call the function (e.g., alone vs. on an object). In arrow functions, 'this' behaves differently (it doesn't change).

   **Example**:
   ```javascript
   function User(name) {
     this.name = name;  // 'this' sets property on the calling object
   }
   let person1 = { name: "" };
   User.call(person1, "Alice");  // Use 'call' to set 'this' to person1
   console.log(person1.name);  // "Alice"
   ```

## 5. The 'new' Keyword: Creating Objects Like a Boss
   -  'new' is like a factory: It creates a new object, links it to a prototype, sets 'this', and returns it.
   - **What Happens Behind the Scenes** (Step-by-Step):
     1. Creates an empty object `{}`.
     2. Links the new object's `__proto__` to the function's `prototype`.
     3. Calls the function with 'this' set to the new object.
     4. Returns the new object.
   - Building a car: 'new' assembles the frame (object), adds inherited parts (prototype), installs the engine ('this' sets properties), and drives it out.
   - **Without 'new'**: Things break—'this' points wrong, no prototype link.
   - **Extra Point**: Modern JS classes (e.g., `class MyClass {}`) are just "sugar" over 'new' and prototypes. Learn this first to understand classes better.

   **Example**:
   ```javascript
   function Car(model) {
     this.model = model;  // Set property using 'this'
   }
   Car.prototype.drive = function() {  // Add method to prototype (shared)
     console.log(this.model + " is driving!");
   };
   let myCar = new Car("Tesla");  // 'new' creates instance
   myCar.drive();  // "Tesla is driving!" (uses prototype method)
   ```

## 6. Prototypal Inheritance
   -  Objects "inherit" from other objects via prototypes. You link one object's prototype to another to share properties/methods.
   - **How to Do It**:
     - Old way: Use `__proto__` (not recommended now).
     - Modern way: `Object.setPrototypeOf(child, parent);`
   - **Extra Point**: This is efficient—no copying code. But watch for chain issues (e.g., modifying parent affects children).
   - **Common Use**: Extending built-ins, like adding a method to all arrays or strings.

   **Example: Adding a Custom Method to All Strings**:
   ```javascript
   String.prototype.trueLength = function() {  // Add to String.prototype
     return this.trim().length;  // 'this' is the string; trim spaces
   };
   let messyString = "Hello     ";  // Length 11 with spaces
   console.log(messyString.trueLength());  // 5 (after trim)
   ```
   - Now EVERY string in your code has `trueLength()`!

## 7. Everything is an Object:
   -  Arrays, strings, functions—all inherit from `Object.prototype`. That's why they have methods like `toString()`.
   - **Avoid Modifying Built-Ins**: Adding to `Object.prototype` can break code. Use it for learning only.
   - **Classes as Syntactic Sugar**: ES6 classes hide prototypes:
```javascript
     class Animal {
       constructor(name) { this.name = name; }
       speak() { console.log(this.name + " speaks!"); }
     }
     let dog = new Animal("Dog");
     dog.speak();  // Behind scenes: Same as prototypes!
     ```
## 8. Chain Diagram

![[Pasted image 20250922084529.png]]

## 9. `prototype` vs `__proto__`

### `prototype`
- Exists only on **functions** (that can be constructors).
- It’s an **object used as a blueprint** for instances created with `new`.
```js
function Person() {}
console.log(Person.prototype); 
// { constructor: Person }
```
### `__proto__`
- Exists on **all objects**.
- It’s the **hidden link** to the object’s parent in the prototype chain.
- It always points to the constructor’s `prototype`.
```js
function Person() {}
const p1 = new Person();

console.log(p1.__proto__ === Person.prototype); 
// true
```
### Example
```js
function Person() {}
Person.prototype.greet = function() {
  console.log("Hello");
};

const p1 = new Person();
```
### Diagram
```
 Person (function)
    |
    └── prototype (object) { greet: f(), constructor: Person }
                                  ▲
                                  |
                           __proto__ (on p1)

 p1 (object)
    └── own properties: (none yet)
    └── __proto__ → Person.prototype

 Person.prototype.__proto__ → Object.prototype
 Object.prototype.__proto__ → null
```
### Meaning
- `prototype` → a **property on functions** (`Person.prototype`).
- `__proto__` → a **property on objects** (`p1.__proto__`). 
- They **connect**: `p1.__proto__ === Person.prototype`.


**Rule of thumb**:
- `prototype` → lives on functions. Used for inheritance.
- `__proto__` → lives on objects. Points to the prototype object they inherit from
