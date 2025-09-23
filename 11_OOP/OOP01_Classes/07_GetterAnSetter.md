# Getters and Setters

## What are Getters and Setters?

- Getters and setters are special methods in JavaScript that let you control access to an object's properties.
- They act like gatekeepers, allowing you to decide how someone can get (read) or set (change) a property’s value.
- Getter: A method that gets (returns) the value of a property.
- Setter: A method that sets (updates) the value of a property.

## Why Use Getters and Setters?

Sometimes, you don’t want people to directly access or change your object’s properties. For example:

- You might want to hide a password.
- You might want to modify a value before showing it (e.g., always return an email in lowercase).
- You want to add custom logic, like checking if a value is valid before setting it.

Getters and setters give you fine-grained control over how properties are accessed or modified.

## How to Use Getters and Setters

Let’s create a simple example to understand getters and setters. We’ll make a `User` class with an email and password, and use getters and setters to control access to them.

### Example Code

```javascript
class User {
  constructor(email, password) {
    this._email = email; // Use _ to indicate "private" property
    this._password = password;
  }

  // Getter for email
  get email() {
    return this._email.toLowerCase(); // Always return email in lowercase
  }

  // Setter for email
  set email(value) {
    this._email = value; // Store the new email value
  }

  // Getter for password
  get password() {
    return this._password.toUpperCase(); // Always return password in uppercase
  }

  // Setter for password
  set password(value) {
    this._password = value; // Store the new password value
  }
}

// Create a user
const user = new User("Hitesh@Example.com", "abc123");

// Access properties using getters
console.log(user.email); // Output: hitesh@example.com (lowercase)
console.log(user.password); // Output: ABC123 (uppercase)

// Update properties using setters
user.email = "New@Example.com";
user.password = "xyz789";

console.log(user.email); // Output: new@example.com
console.log(user.password); // Output: XYZ789
```

### Key Points from the Example

1. Class and Constructor:

   - We created a `User` class with a constructor that takes `email` and `password`.
   - We store them as `_email` and `_password` (the underscore `_` is a convention to indicate these are "private" properties, meaning they shouldn’t be accessed directly, to make the strictly private use #).

2. Getter:

   - The `get email()` method runs when someone tries to read `user.email`.
   - It returns the `_email` value, but we modify it to lowercase for consistency.
   - Similarly, `get password()` returns `_password` in uppercase.

3. Setter:

   - The `set email(value)` method runs when someone tries to change `user.email = "new value"`.
   - It updates `_email` with the new value.
   - The `set password(value)` does the same for `_password`.

4. Why `_email` and `_password`?

   - Using `_email` instead of `email` avoids a race condition (a conflict where the constructor and setter try to manage the same property).
   - By storing the actual value in `_email` or `_password`, we let getters and setters handle the property names (`email`, `password`) without conflicts.

5. How It Works:
   - When you write `user.email`, the getter runs and returns the modified value.
   - When you write `user.email = "new@email.com"`, the setter runs and stores the value.

## Common Mistake: Race Condition

If you try to use the same property name in the constructor and getters/setters, JavaScript gets confused. For example:

```javascript
class User {
  constructor(email) {
    this.email = email; // This causes a conflict with the setter
  }

  get email() {
    return this.email; // Infinite loop! Getter calls itself
  }

  set email(value) {
    this.email = value; // Infinite loop! Setter calls itself
  }
}
```

Solution: Use a different name (like `_email`) in the constructor to avoid this conflict.

### Why use getters and setters (even if fields aren't private)?

They allow you to:

1. Control access to properties
2. Validate data before setting
3. Compute values on the fly
4. Add logging or side effects
5. Future-proof your class design

### 🔧 Example:

```js
class Car {
  constructor(engine) {
    this._engine = engine;
  }

  get engine() {
    console.log("Getting engine");
    return this._engine.toUpperCase(); // computed + logging
  }

  set engine(value) {
    if (typeof value !== "string") throw new Error("Engine must be a string");
    this._engine = value;
  }
}

const car = new Car("v6");
console.log(car.engine);   // "Getting engine" → "V6"
car.engine = 123;          // ❌ Error: Engine must be a string
```

So even if `_engine` is not truly private, getters/setters give you control and flexibility.

## Alternative Way: Using `Object.defineProperty`

Before classes were common in JavaScript, people used `Object.defineProperty` to create getters and setters. Here’s how it works:

```javascript
function User(email, password) {
  this._email = email;
  this._password = password;

  // Define getter and setter for email
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toLowerCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  // Define getter and setter for password
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const user = new User("Hitesh@Example.com", "abc123");
console.log(user.email); // Output: hitesh@example.com
console.log(user.password); // Output: ABC123
```

- What’s Happening?
  - `Object.defineProperty` lets you define a property (`email`, `password`) with custom getter and setter functions.
  - It’s an older way to achieve the same result as class-based getters and setters.
  - You’ll see this in older codebases, but the class syntax is more common now.

## Even Simpler: Object Literal Syntax

You can also define getters and setters directly in an object literal:

```javascript
const user = {
  _email: "Hitesh@Example.com",
  _password: "abc123",

  get email() {
    return this._email.toLowerCase();
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password.toUpperCase();
  },

  set password(value) {
    this._password = value;
  },
};

console.log(user.email); // Output: hitesh@example.com
console.log(user.password); // Output: ABC123
```

- This is the simplest way but less common for complex objects. It’s great for quick setups.

## Why This Matters

Getters and setters are powerful because they:

- Let you hide sensitive data (e.g., return an encrypted password instead of the real one).
- Allow you to add logic (e.g., always return emails in lowercase).
- Protect your object’s properties from being accessed or changed directly.

For example, if you don’t want someone to see the actual password, you could modify the getter:

```javascript
get password() {
  return ""; // Hide the real password
}
```

## Private Properties (Bonus Info)

In modern JavaScript (since 2022), you can make properties truly private using the `#` symbol. This is a new feature that locks properties so they can’t be accessed outside the class.

```javascript
class User {
  #email; // Truly private property
  #password;

  constructor(email, password) {
    this.#email = email;
    this.#password = password;
  }

  get email() {
    return this.#email.toLowerCase();
  }

  set email(value) {
    this.#email = value;
  }
}

const user = new User("Hitesh@Example.com", "abc123");
console.log(user.email); // Output: hitesh@example.com
console.log(user.#email); // Error: Private field '#email' cannot be accessed
```

- The `#` makes `email` and `password` truly private, unlike `_email`, which is just a convention.
- This is a modern feature, so check if your environment supports it.

## Key Takeaways for Beginners

1. Getters let you control how a property’s value is read (e.g., `user.email`).
2. Setters let you control how a property’s value is updated (e.g., `user.email = "new@email.com"`).
3. Use `_` (underscore) for “private” properties to avoid conflicts with getters/setters.
4. Getters and setters are like middlemen that let you add logic when accessing or changing properties.
5. Modern classes are the easiest way to use getters and setters, but `Object.defineProperty` or object literals work too.
6. Private properties with `#` are a new way to lock properties, but `_` is still widely used.

## Practice Tip

Try creating a class for a `Car` with properties like `model` and `speed`. Add getters to format the model name (e.g., capitalize it) and setters to ensure speed isn’t set to a negative value. This will help you understand how getters and setters work in real code!
These notes should give you a clear, beginner-friendly understanding of getters and setters. If you want more examples or have questions, let me know! 🚀
