# Promises

- A Promise in JavaScript is an object that represents a value that may not be available yet but will be resolved at some point in the future.

- The value is produced by an operation that takes time (such as a network request or a file read).

  - If the operation succeeds, the Promise resolves with a result value.
  - If it fails, the Promise rejects with an error.

- A Promise represents a task that takes time to complete. Instead of blocking the program while waiting, the Promise allows the program to continue running other code, and delivers the result (or error) once it’s values is ready.

## Creating Promises in JavaScript

Syntax:

```javascript
let variableName = new Promise(function(resolve, reject) {
    // asynchronous task here

    if (/* success */) {
        resolve("Success result");
    } else {
        reject("Error message");
    }
});
```

1. A Promise is an object in JavaScript that represents the eventual completion (success) or failure of an asynchronous operation.

2. To create a Promise, we use the `new Promise()` constructor.

   - It takes a callback function (also called the executor function).
   - This callback automatically gets two arguments:

     - resolve → call this when the task is successful.
     - reject → call this when the task fails.

3. Inside the callback, you write your asynchronous or time-taking logic.

   - If the operation is successful → use `resolve(result)`.
   - If the operation fails → use `reject(error)`.

4. Promise Consumption:

   - Whatever you pass to resolve() will be received by `.then()`.
   - Whatever you pass to reject() will be received by `.catch()`.

## Examples

### Example 1

```javascript
// Creating promise
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed !!! ");
    resolve();
  }, 2000);
});

// Consuming promise
promiseOne.then(function () {
  console.log("Promise consumed !!!");
});
```

Note that, A Promise needs either `resolve()` or `reject()` to be called.

- If neither `resolve` nor `reject` is called, the Promise will stay in the pending state forever.
- In that case:

  - `.then()` will never run (because no success).
  - `.catch()` will never run (because no error).

- So effectively, the Promise “does not return anything” — but more precisely, it just never settles.

### Example 2

```javascript
// const promiseTwo = there no need to reference this as will are defining then definition right after promise definition
//
//
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed2 !!! ");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise consumed2 !!!");
});
```

### Example 3

```javascript
// return value with promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed, returning a value !!! ");
    resolve({
      userName: "MeghshamKapure",
      score: 650,
    });
  }, 2000);
});

promiseThree.then(function (user) {
  console.log(user);
});
```

### Example 4

```javascript
// return value with promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed, returning a value !!! ");
    resolve({
      userName: "MeghshamKapure",
      score: 650,
    });
  }, 2000);
}).then(function (user) {
  console.log(user);
});
```

### Example 5

```javascript
// return value conditionally  with promise and handling resolve and reject object with then, catch, finally
const promiseFour = new Promise(function (resolve, reject) {
  let operationStatus = Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
  console.log(`operationStatus => ${operationStatus}`);

  if (operationStatus) resolve({ status: "200" });
  else reject({ status: "400" });
})
  .then(function (returnValue) {
    console.log(returnValue);
  })
  .catch(function name(error) {
    console.log(error);
  })
  .finally(console.log("Promise either resolved or reject."));
```

# Example 6

```javascript
// Show .then() Chaining

new Promise((resolve, reject) => {
  resolve(2);
})
  .then((num) => {
    console.log(num); // 2
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 4
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 8
  });
```

### Example 7

```javascript
// Show .catch() without then()

new Promise((resolve, reject) => {
  reject("Something went wrong!");
}).catch((error) => console.log("Caught:", error));
```

### Example 8

```javascript
const promiseEight = new Promise(function (resolve, reject) {
  let operationStatus = Math.floor(Math.random() * 10) % 2 === 0;

  console.log(`operationStatus => ${operationStatus}`);

  if (operationStatus) {
    resolve({ status: "200" });
  } else {
    // reject({ status: "400" });
  }
});

async function consumePromiseEight() {
  try {
    const response = await promiseEight;
    console.log(`Response from Promise Eight : ${JSON.stringify(response)}`);
  } catch (error) {
    console.log(`Error from Promise Eight : ${JSON.stringify(error)}`);
  } finally {
    console.log(`Finally block executed!`);
  }
}

consumePromiseEight();
// This calls the async function that handles the promise.
// If you define a promise that can reject, you must handle it
// (using .catch() or try...catch) to avoid unhandled promise rejections.
```

## Using Predefined Promises in JavaScript

In JavaScript, some functions (like `fetch`) already return a Promise. These are called predefined promises because we don’t manually create them using `new Promise`.

You can handle them in two main ways:

### Using `async/await` (Modern & Readable)

```javascript
async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`This is the error: ${error.message}`);
  }
}

getAllUser();
```

Explanation:

- `fetch(url)` → returns a Promise.
- `await fetch(url)` → waits until the Promise resolves (response received).
- `response.json()` → converts the response into JavaScript object/array.
- Errors (like invalid URL, network issue, or bad status) are caught in the `catch` block.

### Using `.then().catch()` (Classic Way)

```javascript
// `fetch` is a predefined Promise in JavaScript (you don’t need to wrap it in `new Promise`).
const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`This is the error: ${error.message}`);
  });
```

Explanation:

- `fetch(url)` starts the request and returns a Promise.
- `.then(response => response.json())` → handles the resolved Promise.
- `.catch(error => …)` → handles any rejection (errors).
