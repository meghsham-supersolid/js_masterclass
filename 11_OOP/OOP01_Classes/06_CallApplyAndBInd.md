# 1. `call()` method

- The call method lets you call a function and explicitly set what `this` should be, while also passing arguments one by one.
- How it works:

  - You use call on a function.
  - The first argument is the object you want this to point to.
  - Any additional arguments are passed to the function individually.

- Example:
  Imagine you have a function that says hi:

```javascript
function sayHi(greeting, emoji) {
  console.log(`${greeting}, I'm ${this.name}! ${emoji}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

sayHi("Hello", "😊"); // Output: Hello, I'm undefined! 😊
sayHi("Hey", "🚀"); // Output: Hey, I'm undefined! 🚀
```

- In above example, `sayHi()` is by default has `this` pointint to Global Execution Context.
- So with that setup it wont be able to access `name` property of `person1` and `person2` and the the output will be

- To define the `this` context of function we pass the object that need to access explicitly with help of call method.

```javascript
function sayHi(greeting, emoji) {
  console.log(`${greeting}, I'm ${this.name}! ${emoji}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

sayHi.call(person1, "Hello", "😊"); // Output: Hello, I'm undefined! 😊
sayHi.call(person2, "Hey", "🚀"); // Output: Hey, I'm undefined! 🚀
```

# 2. `apply` Method

- The `apply` method is super similar to `call`, but there’s one big difference: instead of passing arguments one by one, you pass them as an array.
- Like `call`, the first argument is the object you want `this` to point to and The second argument is an array of arguments to pass to the function.

Example:

Let’s use the same `sayHi` function:

```javascript
function sayHi(greeting, emoji) {
  console.log(`${greeting}, I'm ${this.name}! ${emoji}`);
}
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

sayHi.apply(person1, ["Hello", "😊"]); // Output: Hello, I'm Alice! 😊
sayHi.apply(person2, ["Hey", "🚀"]); // Output: Hey, I'm Bob! 🚀
```

- Instead of `sayHi.call(person1, "Hello", "😊")`, we use `apply` and pass `["Hello", "😊"]` as an array.
- The result is the same as `call`, but `apply` is handy when you have arguments in an array already. The difference is only bundling arguments array .

#3. `bind` Method

- The `bind` method is a bit different from `call` and `apply`.
- Instead of calling the function right away, it creates a new function with a fixed `this` value (and optionally some arguments). You can call this new function later.

How it works:

- The first argument is the object you want `this` to point to.
- You can also pass arguments that will be “locked in” for the new function.
- The new function can be stored and called whenever you want.

Example:

Using the same `sayHi` function:

```javascript
function sayHi(greeting, emoji) {
  console.log(`${greeting}, I'm ${this.name}! ${emoji}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

const hiForAlice = sayHi.bind(person1, "Hello", "😊");
const hiForBob = sayHi.bind(person2, "Hey", "🚀");

hiForAlice(); // Output: Hello, I'm Alice! 😊
hiForBob(); // Output: Hey, I'm Bob! 🚀
```

- `bind` creates a new function (`hiForAlice`) where `this` is always `person1` and the arguments `"Hello"` and `"😊"` are pre-set.
- You can call `hiForAlice()` anytime, and it’ll use those settings.
- Think of `bind` as creating a customized version of the function that’s ready to go whenever you need it, like saving a preset on your favorite game controller.
