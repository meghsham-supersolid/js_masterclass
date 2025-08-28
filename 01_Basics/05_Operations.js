/* 
Assignment operators
An assignment operator assigns a value to its left operand 
Assignment	x = f()
Addition assignment	x += f()
Subtraction assignment	x -= f()
Multiplication assignment	x *= f()
Division assignment	x /= f()
Remainder assignment	x %= f()
Exponentiation assignment	x **= f()	
Left shift assignment	x <<= f()	
Right shift assignment	x >>= f()	
Unsigned right shift assignment	x >>>= f()
Bitwise AND assignment	x &= f()
Bitwise XOR assignment	x ^= f()
Bitwise OR assignment	x |= f()
Logical AND assignment	x &&= f()
Logical OR assignment	x ||= f()
Nullish coalescing assignment	x ??= f()

Comparison operators

Equal (==)	Returns true if the operands are equal.
Not equal (!=)	Returns true if the operands are not equal.	
Strict equal (===)	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS
Strict not equal (!==)	Returns true if the operands are of the same type but not equal, or are of different type.	
Greater than (>)	Returns true if the left operand is greater than the right operand.	
Greater than or equal (>=)	Returns true if the left operand is greater than or equal to the right operand.
Less than (<)	Returns true if the left operand is less than the right operand.	
Less than or equal (<=)	Returns true if the left operand is less than or equal to the right operand.	


Arithmetic operations
    1. Add a + b
    2. Subtract a - b
    3. Multiply a * b
    4. PowerTo a**b (a rest to b)
    5. Divide a / b
    6. Modulus a % b
    7. Negation -a 
    8. Unary Plus (+a) (Attempts to convert the operand to a number, if it is not already.)

Bitwise operator
Bitwise AND	a & b	Returns a one in each bit position for which the corresponding bits of both operands are ones.
Bitwise OR	a | b	Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
Bitwise XOR	a ^ b	Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]
Bitwise NOT	~ a	Inverts the bits of its operand.
Left shift	a << b	Shifts a in binary representation b bits to the left, shifting in zeros from the right.
Sign-propagating right shift	a >> b	Shifts a in binary representation b bits to the right, discarding bits shifted off.
Zero-fill right shift	a >>> b	Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.

 Pre and Post Operator
 ++X --X //pre
 X++ X-- // post


 JS allow 2 different type of data to compare in whi it might perform conventions of the one of the data matching with other . this may cause unpredictable result.
// Read this : 
// https://tc39.es/ecma262/multipage/abstract-operations.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
*/
