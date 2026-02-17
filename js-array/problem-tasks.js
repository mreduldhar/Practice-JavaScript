/**
 *  Level 1: Basic (Foundation Strong Korar Jonno)
 */
// ----------------- 1 Array Create & Access ------------------ //

let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits[1]); // 2nd element
fruits.push("mango");
console.log(fruits[fruits.length - 1]); // last element

// ----------------- 2 indexOf() ------------------ //
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.indexOf(40)); // 3
console.log(numbers.indexOf(60)); // -1

// ----------------- 3 slice() ------------------ //
let student = ["mredul", "munnna", "sourov", "protyush", "jony"];

// let newArray = student.slice(1, 5);

// console.log(newArray);
console.log("new array: ", student.slice(1, 5)); // slice() method new array return kore

// ----------------- 4 splice()------------------ //
let nums = [10, 20, 30, 40, 50, 60];

let removeMiddleElement = nums.splice(2, 1);

let addElement = nums.splice(2, 0, 90);

console.log("added elements: ", addElement);

console.log(nums);

console.log("removed elements:", removeMiddleElement);
