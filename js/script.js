console.log("1. Is this working");

const myName = "Cindy";
console.log("2. My name is" + myName);

const myNumber = 92;
console.log("3. Type of Number " + typeof myNumber);

let y = true;
let x = false;
console.log("4. y is " + y);
console.log("5. x is " + x);
console.log("6. The equality of x and y is " + (x===y));

let foo = 42; // foo is now a number
console.log("7. foo = " + foo);
foo = "bar"; // foo is now a string
console.log("8. foo = " + foo);
foo = true; // foo is now a boolean
console.log("9. foo = " + foo);

const bar = 42; // foo is a number
const result = bar + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log("10. result is " + result); // 421

console.log("11. 42/+0: " + bar / +0); // Infinity
console.log("12. 42/-0: " + bar / -0); // -Infinity 

console.log("13. type of null: " + typeof null); 
console.log("14. is null? "); console.log(null === null); 

let n;
console.log("15. undefined? " + n);

