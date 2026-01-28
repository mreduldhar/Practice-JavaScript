/* Task-4: What will be the result of the following codes:

var a = isNaN(‘11’); // false

var a = isNaN(2-10);

Explain your answers.

*/

// isNaN: number na hole eta true return korbe , number hole false return korbe

var a = isNaN("sta"); // true

var b = isNaN(2-10); // false

var number = Number.isNaN("hello")
console.log("isNaN? ", number)

console.log(a)
console.log(b)

var checkNumber = "bye"

console.log(Number.isNaN(checkNumber))