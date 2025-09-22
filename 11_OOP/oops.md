# JS is Object Oriented Classes ?

Yes — JavaScript does have classes, but here’s the important part:

Classes in JS are not like classes in strictly object-oriented languages like Java, C++. They are more of a syntactic sugar (a cleaner way of writing) over JavaScript’s existing prototype-based inheritance.

1. Before ES6 (2015)

   - JavaScript didn’t have a `class` keyword.
   - Developers created "classes" using constructor functions and `prototype`.

   Example (old style):

   ```js
   // constructor functions
   function Person(name, age) {
     this.name = name;
     this.age = age;

     return Person; // writing this is not mandatory as JS insert this implicitly if not done by coders
   }

   // prototype
   Person.prototype.sayHello = function () {
     console.log(`Hello, I am ${this.name}`);
   };

   const p1 = new Person("Meghsham", 22);
   p1.sayHello(); // Hello, I am Meghsham
   ```

   Here, `Person` is acting like a "class," but under the hood it’s just a function with a prototype.

2. After ES6 (modern JavaScript)

   - JavaScript introduced the `class` keyword to make the syntax more familiar (like Java or Python).
   - But internally, it still works on prototypes.

   Example (modern style):

   ```js
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }

     sayHello() {
       console.log(`Hello, I am ${this.name}`);
     }
   }

   const p2 = new Person("Meghsham", 22);
   p2.sayHello(); // Hello, I am Meghsham
   ```

   This looks like a real class, but it’s just a cleaner way of writing what we had in the first example.

### Key Things to Remember

- JavaScript classes are syntactic sugar over prototypes.
- You can use constructor functions or class syntax — both do the same thing.
- Unlike Java:

  - No strict type system.
  - Methods can be added/modified at runtime.
  - Multiple inheritance doesn’t exist, but we can use mixins.

#

# object props and fucntiom

Perfect question — understanding Object Literals deeply is a must, because in JavaScript, almost _everything_ (arrays, functions, classes, etc.) is built on top of objects.

Let’s go step by step.

## 1. What is an Object in JavaScript?

In simple words:
An object in JS is a collection of key–value pairs (called properties).

- A key is always a string (or symbol).
- A value can be anything: number, string, array, another object, function, etc.

Think of it like a dictionary (word → meaning) in real life, or a locker where each key opens a value.

Example:

```js
const person = {
  name: "Meghsham",
  age: 22,
  isStudent: true,
};
```

Here:

- `"name" → "Meghsham"`
- `"age" → 22`
- `"isStudent" → true`

## 2. What is an Object Literal?

An Object Literal is simply a way of creating an object directly using `{}` (curly braces).
It’s the most common and simplest syntax to define objects in JS.

Example:

```js
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
};
```

Here:

- `car` is an object.
- We created it literally using `{ ... }`.
  That’s why it’s called an object literal.

## 3. Inside an Object Literal

An object literal can hold:

- Properties (key–value pairs).
- Methods (functions inside objects).
- Nested objects (objects inside objects).
- Getters and Setters.

### Example:

```js
const person = {
  name: "Meghsham", // Property
  age: 22, // Property

  greet() {
    // Method (short-hand for function)
    console.log(`Hi, I am ${this.name}`);
  },

  address: {
    // Nested Object
    city: "Pune",
    country: "India",
  },

  get info() {
    // Getter
    return `${this.name}, Age: ${this.age}`;
  },

  set updateAge(newAge) {
    // Setter
    this.age = newAge;
  },
};

person.greet(); // Hi, I am Meghsham
console.log(person.info); // Meghsham, Age: 22
person.updateAge = 23;
console.log(person.age); // 23
```

## 4. Advanced Features in Object Literals

### (a) Shorthand Properties

If variable name = property name, we can skip repeating:

```js
const name = "Meghsham";
const age = 22;

const person = { name, age }; // same as { name: name, age: age }
```

### (b) Computed Property Names

You can use expressions as keys with `[]`.

```js
const prop = "score";
const student = {
  name: "Alex",
  [prop]: 95, // becomes { score: 95 }
};

console.log(student.score); // 95
```

### (c) Method Shorthand

Old way:

```js
const obj = {
  sayHello: function () {
    console.log("Hello");
  },
};
```

Modern way:

```js
const obj = {
  sayHello() {
    console.log("Hello");
  },
};
```

### (d) Symbols as Keys

Symbols allow unique keys.

```js
const id = Symbol("id");

const user = {
  name: "Ram",
  [id]: 101,
};

console.log(user[id]); // 101
```

## 5. How Objects Work Internally

- JS objects are hashmaps under the hood.
- Each property is stored as a key–value pair.
- Objects also have a hidden link to a prototype (used for inheritance).

## 6. Difference Between Object Literal and Other Ways of Creating Objects

| Way                    | Syntax                                   | Notes                         |
| ---------------------- | ---------------------------------------- | ----------------------------- |
| Object Literal         | `{}`                                     | Easiest & most common         |
| Constructor Function   | `new FunctionName()`                     | Old-school, before ES6        |
| Class                  | `new ClassName()`                        | Modern OOP-style              |
| `Object.create(proto)` | Creates object with a specific prototype | More control over inheritance |

Example:

```js
const obj1 = {}; // Object literal
const obj2 = new Object(); // Object constructor
const obj3 = Object.create(null); // No prototype
```

## 7. Real-Life Analogy

Think of an Object Literal as making a house directly by hand:

```js
const house = {
  rooms: 3,
  color: "blue",
  owner: "Meghsham",
};
```

Whereas using a class or constructor is like making a blueprint first, then building houses from it.

## Key Takeaways

- Object literal = direct object creation with `{}`.
- Can store properties, methods, nested objects, getters/setters.
- Supports shorthand (`{ name, age }`), computed properties (`[prop]: value`).
- Simplest and most widely used way to create objects in JS.

⚡Quick Check for You:
What do you think will happen here?

```js
const key = "age";
const student = {
  name: "Rahul",
  [key]: 21,
};

console.log(student.key);
console.log(student.age);
```

Would you like me to explain the answer immediately, or do you want to try it yourself first and then we’ll discuss?

# this is global function and current scope

Great point — you’ve just touched on one of the trickiest but most important parts of JavaScript:

the relationship between global functions, scope, and `this`.

Let’s carefully unpack these step by step, with simple examples and analogies.

# 1. What is Scope in JS?

Think of scope like a "box" that defines where a variable/function can be accessed.

### Types of Scope:

1. Global Scope

   - Variables/functions declared outside of any block or function.
   - Accessible anywhere.

   ```js
   let globalVar = "I am global";

   function show() {
     console.log(globalVar); // accessible here
   }

   console.log(globalVar); // accessible here
   ```

2. Function Scope

   - Variables declared inside a function are only available inside that function.

   ```js
   function test() {
     let localVar = "inside";
     console.log(localVar); // ✅
   }

   // console.log(localVar);Error: not defined
   ```

3. Block Scope (`let`, `const`)

   - Variables inside `{}` with `let` or `const` are scoped only to that block.

   ```js
   if (true) {
     let blockVar = "inside block";
     console.log(blockVar); // ✅
   }

   // console.log(blockVar);Error
   ```

# 2. What is `this` in JS?

The keyword `this` refers to the context (the object that "owns" the code that’s being executed).
But here’s the tricky part: its value changes depending on how a function is called.

## Case 1: Global `this`

- In browsers, global `this` = `window`.
- In Node.js, global `this` = `{}` (empty object in strict mode).

```js
console.log(this); // In browser → Window object
```

## Case 2: Inside an Object Method

When a function is called as a method of an object, `this` = the object.

```js
const person = {
  name: "Meghsham",
  greet() {
    console.log(this.name);
  },
};

person.greet(); // "Meghsham"
```

## Case 3: In a Standalone Function

- In non-strict mode, `this` = global object (`window` in browser).
- In strict mode, `this` = `undefined`.

```js
function show() {
  console.log(this);
}

show(); // window (non-strict), undefined (strict)
```

## Case 4: Arrow Functions

Arrow functions do not have their own `this`.
They inherit `this` from their surrounding scope.

```js
const person = {
  name: "Meghsham",
  arrowGreet: () => {
    console.log(this.name);
  },
};

person.arrowGreet(); // undefined (or empty), because `this` is taken from outer/global scope
```

## Case 5: `this` inside `setTimeout` or Callbacks

```js
const person = {
  name: "Meghsham",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

person.greet(); //undefined, because `this` inside function → global

// Fix: use arrow function
const person2 = {
  name: "Meghsham",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

person2.greet(); // "Meghsham"
```

# 3. Real-Life Analogy

Think of `this` as “whose house key you’re holding when you run the function.”

- If you’re in the global area → you hold the global house key (window).
- If you’re inside a person object’s house → you hold that person’s house key.
- If you use an arrow function → you don’t get a new key, you borrow the one from outside.

# Key Takeaways

- Scope = where a variable/function is visible.
- Global scope = accessible everywhere.
- Function scope = only inside a function.
- Block scope = only inside `{}` with `let` / `const`.
- `this` depends on _how_ a function is called:

  - Global → window/global object.
  - Object method → that object.
  - Standalone function → global/undefined.
  - Arrow function → inherits from parent scope.

⚡Quick Check for You:
What do you think this will print?

```js
const obj = {
  name: "Rahul",
  normalFunc: function () {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  },
};

obj.normalFunc();
obj.arrowFunc();
```

Do you want me to give the answer right away, or would you like to guess first and then we’ll break it down?

# new keyword & constructor function with and without new keyword in node environment

Excellent — this is a very important topic because in JavaScript, the `new` keyword changes the entire behavior of a function. Let’s carefully break it down, especially in a Node.js environment (since it behaves a little differently than browser global).

# 1. What is the `new` keyword?

The `new` keyword is used to create an instance (object) from a function or class.

When you call a function with `new`:

1. A brand-new empty object `{}` is created.
2. That object is linked to the function’s `prototype`.
3. `this` inside the function refers to that new object.
4. Unless the function explicitly returns another object, it automatically returns `this` (the new object).

# 2. Constructor Function in JavaScript

A constructor function is just a normal function, but by convention:

- Its name starts with a capital letter.
- It is meant to be used with `new`.

Example:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Meghsham", 22);
console.log(p1); // Person { name: 'Meghsham', age: 22 }
```

Here:

- `new Person(...)` creates a new object.
- That object gets properties `name` and `age`.

# 3. Without `new` Keyword (in Node)

If you forget to use `new`:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p2 = Person("Rahul", 21); //forgot "new"
console.log(p2);
```

What happens in Node.js (strict mode by default):

- `this` will be undefined, because functions in Node do not default to the global object like browsers.
- So it will throw an error: `TypeError: Cannot set properties of undefined`.

In browsers (non-strict mode), `this` would point to the global object (`window`), so properties would “leak” globally:

```js
Person("Rahul", 21);
console.log(global.name); // in browser → "Rahul"
```

But in Node, it’s safer (it doesn’t leak).

# 4. Constructor Function WITH and WITHOUT `new`

### With `new`:

```js
function Car(model) {
  this.model = model;
}

const c1 = new Car("Tesla");
console.log(c1); // Car { model: 'Tesla' }
```

###Without `new` (in Node):

```js
function Car(model) {
  this.model = model;
}

const c2 = Car("BMW"); // forgot "new"
console.log(c2); // undefined
```

And it will throw:

```
TypeError: Cannot set properties of undefined (setting 'model')
```

# 5. Fixing the Problem

To avoid accidents, some developers add a guard:

```js
function Person(name, age) {
  if (!(this instanceof Person)) {
    return new Person(name, age);
  }
  this.name = name;
  this.age = age;
}

const p3 = Person("Kiran", 25); // works even without "new"
console.log(p3); // Person { name: 'Kiran', age: 25 }
```

# 6. Comparison to ES6 Classes

Classes are basically syntactic sugar over constructor functions:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p4 = new Person("Ravi", 30);
console.log(p4); // Person { name: 'Ravi', age: 30 }
```

Important: Unlike functions, classes cannot be called without `new`. If you try:

```js
Person("Ravi", 30);
// TypeError: Class constructor Person cannot be invoked without 'new'
```

# Key Takeaways

- `new` creates a new object and binds `this` to it.
- Without `new`, in Node.js, `this` is `undefined` → error.
- Without `new`, in browser non-strict, `this` = global object → properties leak.
- Always capitalize constructor functions (`Person`, `Car`) to remind yourself to use `new`.
- Classes are just safer constructor functions (must use `new`).

⚡Quick Check for You:
What do you think happens here in Node.js?

```js
function Book(title) {
  this.title = title;
  return { type: "Hardcover" };
}

const b1 = new Book("DSA in Java");
console.log(b1);
```

Will it print the `Book` object with `title`, or the `{ type: "Hardcover" }` object?

# object without class in js

Nice question 🙂 — many people think we _need_ classes to make objects in JavaScript (because of Java, C++ mindset).
But in JS, objects existed long before classes (ES6, 2015). In fact, classes are just a _fancier way_ to create objects.

Let’s go step by step.

# 1. The Simplest Way → Object Literal

The fastest and most common way:

```js
const user = {
  name: "Meghsham",
  age: 22,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

user.greet(); // Hi, I am Meghsham
```

No class, no constructor — just `{}`.
This is enough for small objects.

# 2. Using `new Object()`

You can also use the built-in `Object` constructor:

```js
const user = new Object();
user.name = "Rahul";
user.age = 21;

console.log(user); // { name: 'Rahul', age: 21 }
```

But most devs prefer `{}` because it’s shorter.

# 3. Using a Factory Function

Instead of a class, we can write a function that returns objects.

```js
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, I am ${this.name}`);
    },
  };
}

const p1 = createPerson("Kiran", 25);
const p2 = createPerson("Ravi", 30);

p1.greet(); // Hello, I am Kiran
p2.greet(); // Hello, I am Ravi
```

This is called the factory pattern.
It avoids `new`, but still gives reusable objects.

# 4. Using a Constructor Function (Pre-ES6 way)

Before classes were added, people used constructor functions with `new`.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I am ${this.name}`);
  };
}

const p3 = new Person("Anjali", 28);
p3.greet(); // Hi, I am Anjali
```

This is basically what classes do internally.
(Classes are syntactic sugar over this.)

# 5. Using `Object.create()`

You can create objects with a specific prototype (custom inheritance).

```js
const proto = {
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const user = Object.create(proto);
user.name = "Meghsham";
user.age = 22;

user.greet(); // Hi, I am Meghsham
```

This gives full control over the prototype chain (low-level stuff).

# 6. Functions as Objects

In JS, functions themselves are objects!
That means you can attach properties to them:

```js
function myFunc() {}
myFunc.version = "1.0";

console.log(myFunc.version); // 1.0
```

So even without classes, you can “fake” OOP-style behavior.

# Key Takeaways

- JS didn’t have classes until ES6 — but it always had objects.
- Ways to make objects without class:

  1. Object literal `{}` (most common).
  2. `new Object()`.
  3. Factory functions.
  4. Constructor functions with `new`.
  5. `Object.create()` with custom prototypes.

- Classes are just a cleaner syntax over constructor functions & prototypes.

⚡Quick Check for You:
What do you think this prints?

```js
const proto = { greet: () => console.log("Hello!") };
const obj = Object.create(proto);

console.log(obj.greet === proto.greet);
```

Will it be `true` or `false`?

# .constructor

Ah, good one — `.constructor` in JavaScript is a special property that every object has (inherited from its prototype).
Let’s carefully break it down.

# 1. What is `.constructor`?

- Every object in JavaScript has a hidden link to a prototype.
- That prototype has a `.constructor` property, which points back to the function/class that created the object.

Example:

```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("Meghsham");

console.log(p1.constructor);
// [Function: Person]
```

`p1.constructor` points back to `Person`.

# 2. Default Behavior

For built-in objects:

```js
const arr = [1, 2, 3];
console.log(arr.constructor);
// [Function: Array]

const obj = {};
console.log(obj.constructor);
// [Function: Object]

const str = "hello";
console.log(str.constructor);
// [Function: String]
```

# 3. How `.constructor` Works Internally

When you create an object:

1. It gets a prototype.
2. That prototype has a `.constructor` property.
3. So your object inherits it.

Example:

```js
function Car(model) {
  this.model = model;
}

const c1 = new Car("Tesla");

console.log(c1.constructor === Car); // true
console.log(Car.prototype.constructor === Car); // true
```

Notice: `.constructor` actually lives on the prototype, not on the object itself.

# 4. Changing `.constructor`

If you overwrite a prototype, `.constructor` can get messed up:

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype = {
  speak() {
    console.log("I am " + this.name);
  },
};

const a1 = new Animal("Dog");

console.log(a1.constructor); //[Function: Object], not Animal
```

Why? Because we replaced the whole `prototype` object, and lost the original `.constructor`.

Fix:

```js
Animal.prototype.constructor = Animal;
```

# 5. In Classes

Classes behave the same way:

```js
class Student {
  constructor(name) {
    this.name = name;
  }
}

const s1 = new Student("Rahul");
console.log(s1.constructor);
// [class Student]
```

# 6. Real-Life Analogy

Think of `.constructor` like the “blueprint label” stamped on every house you build:

- If you built it with the `Car` blueprint, `.constructor` says “Car.”
- If you built it with `Array`, it says “Array.”
- If you erase the label (by overwriting prototype), `.constructor` may point to the wrong thing.

# Key Takeaways

- `.constructor` tells you which function/class made the object.
- It’s inherited from the prototype.
- Be careful: replacing `prototype` removes the original `.constructor`.
- Usually used for type checking (but `instanceof` is more reliable).

⚡Quick Check for You:
What do you think this prints?

```js
function Bike() {}
const b1 = new Bike();

Bike.prototype = {};
const b2 = new Bike();

console.log(b1.constructor === Bike);
console.log(b2.constructor === Bike);
```

Should I give the explanation step by step, or do you want to try guessing first?

# instanceof js

# equalsTo js

Perfect — you’ve asked about two fundamental comparison tools in JavaScript:

1. `instanceof`
2. equality operators (`==` and `===`, which you wrote as _equalsTo_).

Let’s go step by step.

# 1. `instanceof` in JavaScript

`instanceof` checks whether an object is created by (or inherits from) a specific constructor / class.
It looks up the prototype chain.

### Example:

```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("Meghsham");

console.log(p1 instanceof Person); // true
console.log(p1 instanceof Object); // true (because all objects inherit from Object)
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
```

### Important Notes about `instanceof`

- Works only for objects, not primitives:

```js
console.log("hello" instanceof String); // false
console.log(new String("hello") instanceof String); // true
```

- Checks prototype chain, not just constructor:

```js
class A {}
class B extends A {}

const obj = new B();
console.log(obj instanceof B); // true
console.log(obj instanceof A); // true
```

Use `instanceof` when you want to check object type / inheritance.

# 2. Equality Operators (`==` vs `===`)

JS has two main equality operators:

## (a) `==` → Loose Equality

- Compares values after type conversion (type coercion).
- Can give “weird” results.

```js
console.log(5 == "5"); // true  (string converted to number)
console.log(0 == false); // true  (false converted to 0)
console.log(null == undefined); // true
```

## (b) `===` → Strict Equality

- Compares values without type conversion (checks both type + value).

```js
console.log(5 === "5"); // false (different types)
console.log(0 === false); // false
console.log(null === undefined); // false
```

Always prefer `===` unless you _really_ need type coercion.

# 3. `Object.is()` (Extra Info )

There’s also `Object.is()` which is like `===` but with tiny differences:

```js
console.log(Object.is(NaN, NaN)); // true (while NaN === NaN is false)
console.log(Object.is(+0, -0)); // false (while +0 === -0 is true)
```

# 4. Real-Life Analogy

- `instanceof` = “Did this house come from this blueprint (class/constructor)?”
- `===` = “Are these two keys exactly the same (same type, same value)?”
- `==` = “Do these two keys look the same if I reshape one?” (type conversion).

# Key Takeaways

- `instanceof`: checks object type / inheritance via prototype chain.
- `==`: loose equality, converts types → risky.
- `===`: strict equality, best practice.
- `Object.is`: more precise in rare cases (NaN, +0/-0).

⚡Quick Check for You:
What do you think this prints?

```js
console.log([] == false);
console.log([] === false);
console.log([] instanceof Array);
console.log([] instanceof Object);
```

Do you want me to give the answer right away, or would you like to try guessing first?

⚡Quick Check for You:
Do you want me to show you the proof that JS classes are just prototypes in disguise (by inspecting one with console.log)—or keep it simple and move on to practice problems?
