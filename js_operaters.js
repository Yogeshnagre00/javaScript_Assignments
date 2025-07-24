//opraters
//1 arithmetics opraters
//2 assignment opraters
//3 comparison opraters
//4 logical opraters
//5 bitwise opraters
//6 type opraters
//7 ternary opraters

// 1 arithmetic opraters
let a =10;
let b =5;
let sum= a + b; // addition
console.log("Sum:", sum);
let c = "10";
let d = "5";
let sum2 = c + d; // string concatenation
console.log("String Concatenation:", sum2);

subtraction = a - b; // subtraction
console.log("Subtraction:", subtraction);

multiplication = a * b; // multiplication
console.log("Multiplication:", multiplication);

division = a / b; // division
console.log("Division:", division);

modulus = a % b; // modulus
console.log("Modulus:", modulus);

inc = a++; // increment
inc2 = ++a; // pre-increment
console.log("Increment (Postfix):", inc);
console.log("Increment (Prefix):", inc2);

decrement = b--; // decrement
console.log("Decrement:", decrement);

//exponentiation
exponentiation = a ** b; // exponentiation
console.log("Exponentiation:", exponentiation);



x += y; // equivalent to x = x + y
console.log("Addition Assignment:", x);

x -= y; // equivalent to x = x - y
console.log("Subtraction Assignment:", x);

x *= y; // equivalent to x = x * y
console.log("Multiplication Assignment:", x);

x /= y; // equivalent to x = x / y
console.log("Division Assignment:", x);

x %= y; // equivalent to x = x % y
console.log("Modulus Assignment:", x);

//2 assignment opraters
let x = 10;
let y = 5;
x = y; // assignment
console.log("Assignment:", x);
x += y; // addition assignment
console.log("Addition Assignment:", x);
x -= y; // subtraction assignment
console.log("Subtraction Assignment:", x);          
x *= y; // multiplication assignment
console.log("Multiplication Assignment:", x);
x /= y; // division assignment
console.log("Division Assignment:", x);
x %= y; // modulus assignment
console.log("Modulus Assignment:", x);

//3 comparison opraters
let isEqual = (a == b); // equality
console.log("Equality:", isEqual);
let isStrictEqual = (a === b); // strict equality
console.log("Strict Equality:", isStrictEqual);
let isNotEqual = (a != b); // inequality
console.log("Inequality:", isNotEqual);
let isStrictNotEqual = (a !== b); // strict inequality
console.log("Strict Inequality:", isStrictNotEqual);
let isGreater = (a > b); // greater than
console.log("Greater Than:", isGreater);
let isLess = (a < b); // less than
console.log("Less Than:", isLess);
let isGreaterOrEqual = (a >= b); // greater than or equal to
console.log("Greater Than or Equal To:", isGreaterOrEqual);
let isLessOrEqual = (a <= b); // less than or equal to
console.log("Less Than or Equal To:", isLessOrEqual);   

//4 logical opraters
let andCondition = (a > 5 && b < 10); // logical AND
console.log("Logical AND:", andCondition);
let orCondition = (a > 5 || b > 10); // logical OR
console.log("Logical OR:", orCondition);
let notCondition = !(a > 5); // logical NOT
console.log("Logical NOT:", notCondition);  

//5 bitwise opraters
let bitwiseAnd = a & b; // bitwise AND
console.log("Bitwise AND:", bitwiseAnd);
let bitwiseOr = a | b; // bitwise OR
console.log("Bitwise OR:", bitwiseOr);
let bitwiseXor = a ^ b; // bitwise XOR
console.log("Bitwise XOR:", bitwiseXor);
let bitwiseNot = ~a; // bitwise NOT
console.log("Bitwise NOT:", bitwiseNot);
let leftShift = a << 1; // left shift
console.log("Left Shift:", leftShift);
let rightShift = a >> 1; // right shift
console.log("Right Shift:", rightShift);    
let unsignedRightShift = a >>> 1; // unsigned right shift
console.log("Unsigned Right Shift:", unsignedRightShift);   

//6 type opraters
let isNumber = typeof a === 'number'; // type check
console.log("Is Number:", isNumber);
let isString = typeof c === 'string'; // type check
console.log("Is String:", isString);

//7 ternary opraters
let max = (a > b) ? a : b; // ternary operator
console.log("Max using Ternary Operator:", max);    

let isAdult = (age >= 18) ? "Adult" : "Minor"; // conditional assignment
console.log("Is Adult:", isAdult);  
// Example of using a ternary operator for a simple condition
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor"; // ternary operator
console.log("Status:", status);