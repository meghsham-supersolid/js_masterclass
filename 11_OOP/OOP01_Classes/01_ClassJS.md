# JavaScript Classes

# Introduction

- Introduced in ECMAScript 2015 (ES6) to, provide a cleaner, more structured way to create objects and manage inheritance compared to the traditional prototype-based approach.

- While they are often described as syntactic sugar over JavaScript's prototype-based inheritance, classes offer a more intuitive syntax for developers familiar with object-oriented programming (OOP) in languages.

- JavaScript classes are templates for creating objects. [class = props + methods]

- Under the hood, classes still rely on JavaScript’s prototype-based inheritance, but they provide a more declarative and readable syntax.

- Classes are defined using the class keyword, and objects are instantiated using the new keyword. They support features like constructors, instance methods, static methods, getters, setters, and inheritance, making them a powerful tool for organizing code in an object-oriented manner.

## Basic Syntax

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Instance property
    this.age = age;
  }

  // Instance method
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an instance
const person1 = new Person("Alice", 30);
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

// constructor method is a special method that runs when an object is instantiated with new keyword and initializes instance properties.
// this keyword refers to the instance of the class.
```

### 1. Class Declaration vs. Class Expression

Classes can be defined in two ways:

1. Class Declaration
```javascript
class Car {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}
}
```

2. Class Expression
```javascript
const Car = class {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}
};
```
### 2. Named Class Expression

```javascript
const Car = class CarClass {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  getClassName() {
    return CarClass.name; // Accesses the class name
  }
};

const myCar = new Car("Toyota", "Camry");
console.log(myCar.getClassName()); // Output: CarClass
```

- Class declarations are not hoisted, unlike function declarations. You must define a class before using it.
- Class expressions can be anonymous or named. Named class expressions are useful for recursive references or debugging.
### 3. Instance Properties and Methods
- Instance properties are defined inside the constructor using this, and instance methods are defined directly in the class body.

```javascript
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying for grade ${this.grade}.`;
  }
}

const student1 = new Student("Bob", 10);
console.log(student1.study()); // Output: Bob is studying for grade 10.
```
### 4.Field Declarations (ES2022+)

- Modern JavaScript allows you to declare instance properties directly in the class body without using the constructor:

```javascript
class Student {
  name;
  grade = 10; // Default value

  constructor(name) {
    this.name = name;
  }

  study() {
    return `${this.name} is studying for grade ${this.grade}.`;
  }
}

const student1 = new Student("Bob");
console.log(student1.study()); // Output: Bob is studying for grade 10.
```
- Field declarations make the class definition more concise.
- You can assign default values to fields.
- Fields declared this way are automatically assigned to the instance (this).

### 5. Static Methods and Properties
Static methods and properties belong to the class itself, not its instances. They are defined using the static keyword.
```javascript
class MathUtils {
   static PI = 3.14159; // Static property

	static square(number) {
		return number \* number;
	}
}

console.log(MathUtils.PI); // Output: 3.14159

console.log(MathUtils.square(5)); // Output: 25
```
- Static methods are called on the class, not on instances (e.g., MathUtils.square(5)).
- Static properties are useful for constants or utility functions related to the class.
- Instances cannot access static methods or properties directly.

### 6. Getters and Setters
Getters and setters allow you to define computed properties or control access to properties.
```javascript

class Circle {
	#radius; // Private field (more on this later)
	constructor(radius) {
		this.#radius = radius;
	}
	get area() {
		return Math.PI \* this.#radius \*\* 2;
	}
	set radius(value) {
		if (value < 0) 	throw new Error("Radius cannot be negative");
		this.#radius = value;
	}
}

const circle = new Circle(5);
console.log(circle.area); // Output: 78.53981633974483
circle.radius = 10; // Using setter
console.log(circle.area); // Output: 314.1592653589793

```
- Getters (get) allow you to compute a property’s value dynamically.
- Setters (set) let you validate or transform values before assigning them.
- Getters and setters are accessed like properties, not methods (no parentheses).
### 7. Private Fields and Methods
- Private fields and methods, introduced in ES2022, are prefixed with # and are only accessible within the class.
```javascript
class BankAccount {
   #balance = 0; // Private field
	deposit(amount) {
		if (amount > 0) this.#balance += amount;
	}
	#calculateInterest() { // Private method
		return this.#balance \* 0.02;
	}
	getBalance() {
	return this.#balance + this.#calculateInterest();
	}
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // Output: 1020
// console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class
```
- Private fields and methods cannot be accessed outside the class, enhancing encapsulation.
- The # syntax is part of the language, not a naming convention.
- Private fields must be declared at the class level (not inside the constructor).

### 8. Inheritance
- Classes support inheritance using the extends keyword, allowing a subclass to inherit properties and methods from a parent class.
```javascript

class Animal {
   constructor(name) {
	   this.name = name;
   }
	speak() {
		return `${this.name} makes a sound.`;
	}
}
	
class Dog extends Animal {
	constructor(name, breed) {
		super(name); // Call parent constructor
		this.breed = breed;
	}
	speak() {
		return `${this.name} barks loudly!`;
	}
}
	
const dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak()); // Output: Rex barks loudly!
console.log(dog instanceof Animal); // Output: true

```
- The super keyword is used to call the parent class’s constructor or methods.
- Subclasses can override parent methods (like speak in the example).
- The `instanceof` operator checks if an object is an instance of a class or its parent.
### 9. Static Inheritance
   Static methods and properties are also inherited by subclasses.
```javascript

class Vehicle {
	static type = "Generic Vehicle";
	static getType() {
		return this.type;
	}
}

class Car extends Vehicle {
	static type = "Car";
}

console.log(Vehicle.getType()); // Output: Generic Vehicle
console.log(Car.getType()); // Output: Car
```
- Static properties and methods are inherited unless overridden in the subclass.
- this in a static method refers to the class itself.

### 10. Prototype and Classes
- Classes are built on JavaScript’s prototype system. Methods defined in a class are stored in the class’s prototype, which is shared across all instances.
```javascript
class Example {
	myMethod() {
	   return "Hello from prototype!";
	}
}

const obj = new Example();
console.log(Example.prototype.myMethod === obj.myMethod); // Output: true
  ```
- Instance methods are stored in the class’s prototype, reducing memory usage.
- You can still manipulate the prototype directly, but it’s rarely necessary with the class syntax.
