/*
When you try to access a property or method on an object, JavaScript will:

   * Look for the property directly on the object.
   * If it doesn’t find it, it will check the object’s prototype.
   * If the property still isn’t found, it will traverse up the prototype chain until it reaches null.

This process is known as prototype chaining, and it’s what makes inheritance in JavaScript work.

*/