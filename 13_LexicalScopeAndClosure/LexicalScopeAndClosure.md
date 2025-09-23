# Beginner-Friendly Notes on Closures and Lexical Scoping in JavaScript

These notes explain closures and lexical scoping in JavaScript in a simple, beginner-friendly way, based on the provided transcript. We’ll remove unnecessary details, simplify the concepts, and use examples to make it as clear as a friendly conversation over tea! 😊

## What is Lexical Scoping?

Lexical scoping is a fancy term that describes how JavaScript decides which variables a function can access based on where the function is defined (not where it’s called). In simple words, a function can access variables from its outer environment (its parent function or global scope) when it’s created.

### Key Points:

- Every function has its own scope (a private space for its variables).
- If a function is defined inside another function, the inner function can access the outer function’s variables.
- This access is determined at the time the function is defined, not when it runs.

### Example:

```javascript
function outer() {
  let username = "Hitesh";

  function inner() {
    console.log(username); // Can access 'username' from outer function
  }

  inner(); // Call inner function
}

outer(); // Output: Hitesh
```

- What’s Happening?
  - The `outer` function defines a variable `username`.
  - The `inner` function is defined inside `outer`, so it can access `username` due to lexical scoping.
  - When we call `outer()`, it runs `inner()`, which prints `username`.

### What If We Try Outside the Scope?

If you try to access a variable outside its scope, you get an error:

```javascript
function outer() {
  let username = "Hitesh";

  function inner() {
    console.log(username); // Works fine
  }

  inner();
  console.log(username); // Works fine (inside outer)
}

outer();
console.log(username); // Error: username is not defined
```

- Why? The `username` variable is only available inside the `outer` function’s scope. Outside, it’s undefined.

### Sibling Functions Don’t Share Variables

If two inner functions are inside the same outer function, they can access the outer function’s variables, but they don’t share their own variables with each other.

```javascript
function outer() {
  let username = "Hitesh";

  function inner1() {
    let secret = "123"; // Only available in inner1
    console.log(username); // Works: Hitesh
    console.log(secret); // Works: 123
  }

  function inner2() {
    console.log(username); // Works: Hitesh
    console.log(secret); // Error: secret is not defined
  }

  inner1();
  inner2();
}

outer();
```

- What’s Happening?
  - Both `inner1` and `inner2` can access `username` because it’s in the outer function.
  - But `inner2` can’t access `secret` because it’s defined only in `inner1`’s scope.
  - Think of it like a family: kids (`inner1` and `inner2`) can ask their parent (`outer`) for toys (`username`), but siblings don’t share their personal toys (`secret`).

## What is a Closure?

A closure is when a function “remembers” its lexical scope (the variables from its outer environment) even after the outer function has finished running. In other words, a closure allows an inner function to keep access to the outer function’s variables, even when the inner function is used elsewhere.

### Key Points:

- A closure is created when you return an inner function from an outer function.
- The inner function “carries” the outer function’s scope with it, like a backpack of variables.
- This is super powerful because it lets you create functions that retain access to specific data, even after the outer function is done.

### Example:

```javascript
function makeFunction() {
  let name = "Mozilla";

  function displayName() {
    console.log(name); // Can access 'name' even after makeFunction finishes
  }

  return displayName; // Return the inner function
}

const myFunc = makeFunction(); // myFunc now holds displayName with its scope
myFunc(); // Output: Mozilla
```

- What’s Happening?
  - `makeFunction` defines a variable `name` and an inner function `displayName`.
  - Instead of calling `displayName` inside `makeFunction`, we return it.
  - When we call `makeFunction()`, it returns `displayName`, which still remembers `name` (Mozilla).
  - Even though `makeFunction` has finished running, `myFunc` (the returned `displayName`) can still access `name` because of the closure.

### Why is This Cool?

Without closures, you’d expect `name` to disappear once `makeFunction` finishes. But closures ensure the inner function keeps a reference to its outer scope’s variables, so `name` stays alive in memory.

## Practical Example: Button Click Handler

Let’s see how closures are useful in a real-world scenario. Imagine you have two buttons (Orange and Green) that change the webpage’s background color when clicked. Instead of writing separate code for each button, we can use a closure to create a reusable click handler.

### HTML:

```html
<button id="orange">Orange</button> <button id="green">Green</button>
```

### JavaScript:

```javascript
function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
```

- What’s Happening?

  - The `clickHandler` function takes a `color` parameter and returns an inner function.
  - The inner function remembers the `color` value (thanks to closure) and uses it to set the background color.
  - When we assign `clickHandler("orange")` to the orange button’s `onclick`, it returns a function that “knows” to use the color `"orange"`.
  - Same for the green button with `"green"`.

- Why Use a Closure?
  - Without closures, the inner function wouldn’t remember the `color` value after `clickHandler` finishes.
  - Closures let us create one generic function (`clickHandler`) that works for any color, avoiding repetitive code.
  - This follows the DRY principle (Don’t Repeat Yourself).

### Testing It:

- Click the Orange button → Background turns orange.
- Click the Green button → Background turns green.

### Common Mistake:

If you write it like this, it won’t work as expected:

```javascript
document.getElementById("orange").onclick = clickHandler("orange")(); // Wrong
```

- Why? The extra `()` immediately runs the inner function, setting the background color right away instead of waiting for a click.
- Fix: Assign only the function reference (`clickHandler("orange")`) to `onclick`, so it runs only when the button is clicked.

## Why Are Closures and Lexical Scoping Important?

1. Lexical Scoping:

   - Helps you understand how variables are accessed in nested functions.
   - Ensures inner functions can use outer function variables safely.

2. Closures:

   - Allow you to create functions that “remember” data, even after their outer function is done.
   - Useful in real-world scenarios like:
     - Event handlers (like the button example).
     - Creating private variables (data hiding).
     - Managing state in frameworks like React.

3. Real-World Use Cases:
   - Event Listeners: Closures help create reusable event handlers (e.g., button clicks).
   - Data Privacy: Closures can hide variables, making them accessible only through specific functions.
   - React Hooks: Closures are used in hooks like `useState` to maintain state between renders.

## Key Takeaways for Beginners

1. Lexical Scoping:

   - A function can access variables from its outer function or global scope, based on where it’s defined.
   - Inner functions can access outer function variables, but not sibling function variables.

2. Closure:

   - A closure is when an inner function remembers its outer function’s variables, even after the outer function finishes.
   - Created by returning an inner function from an outer function.
   - The inner function carries its outer scope (like a backpack) wherever it goes.

3. Practical Example:

   - Closures let you create reusable functions, like a button click handler that remembers a specific color.
   - Avoid repetitive code and make your programs cleaner.

4. Interview Tip:
   - If asked about closures, mention lexical scoping and how the inner function retains access to the outer function’s scope.
   - Use a practical example like the button handler to show you understand real-world applications.

## Practice Tip

Try creating a counter function using a closure:

- Make an outer function that holds a `count` variable.
- Return an inner function that increases `count` each time it’s called.
- Test it by calling the inner function multiple times to see the count increase.

Example:

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```
