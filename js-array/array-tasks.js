/**
    *1. Declare an array
    Declare an array with 5 elements containing fruits
    console log the 3rd index element
    change the value of the 2nd index element to jambura
    console log the final array 
*/

let fruits = ["apple", "banana", "orange", "guava", "watermelon"];

console.log(fruits[2]);

fruits[2] = "jambura";
console.log(fruits);

/**
 * 2. Add or remove elements
    Declare an array of 3 tourist destinations
    Add a new tourist destination to your tourist array
    Add two more to your array
    Remove the last tourist destination you have added
    display the final array as output
*/
let destinations = ["tanguar haor", "cox's bazar", "saint martin"];

destinations.push("bisnakandi");

console.log(destinations);

destinations.push("sundorban", "srimongol");

console.log(destinations);

destinations.pop();

console.log(destinations);

/**
 *  Checking Array Membership with ‘includes’
    Instructions:

    Create an array of books containing different book.

    Use the includes method to check if the array contains a javascript book.

    Print a message to the console indicating whether the element is present in the array or not.
*/
let books = [
  "Rich Dad Poor Dad",
  "The Secret",
  "A Tale of Two Cities",
  "The Alchemist",
];

// books.includes("javascript");
// console.log(books.includes("javascript"));

if (books.includes("javacripts")) {
  console.log("The book is present in the array");
} else {
  console.log("The book is not present in the array");
}

/**
 * 4. Checking if it's an Array
    Instructions:

    Create different variables, each containing either an array or a non-array value.

    Now use isArray to check if each variable is an array.

    Print a message to the console indicating whether each variable is an array or not.
 */

let names = ["Mredul", "Sourov", "Protyush", "Jony", "Shuvon"];
let person = {
  name: "Mredul",
  age: 27,
};

console.log(person);

if (Array.isArray(names)) {
  console.log("names is a array variable");
} else if (Array.isArray(person)) {
  console.log("person is not a array variable");
}

/**
 * 5. Combining Arrays
    Instructions:

    Create two arrays of your choice.
    Use the concat method to combine the two arrays into a new array.
    Print both the original arrays and the combined array using console.log().
*/
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

let newNum = num1.concat(num2);
console.log(num1);
console.log(num2);
console.log(newNum);
