/*
TASK 1: Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const burgerPrice = 501;

if (burgerPrice > 500) {
  console.log("You got a free Coke");
} else {
  console.log("you have to pay 30tk for Coke.");
}

/*
TASK 2: BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
const height = 1.75;
const weight = 70;

const BMI = weight / (height * height);
// console.log(BMI);
if (BMI < 18.5) {
  console.log("you are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("you are overweight");
} else {
  console.log("you are obese");
}

/***
TASK 3: Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
let score = 55;

if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

/***
TASK 4: if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const myScore = 70;
const friendScore = 50;

if (myScore > 80) {
  if (friendScore >= 80) {
    console.log("go fo a lunch");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("good luck next time.");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("friend's message unseen.");
  } else {
    console.log("Block your friend");
  }
} else {
  console.log("go to home and sleep and act sad");
}

/***
TASK 5: you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

*/

let num1 = 45;
let num2 = 34;

let result;

if (num1 > num2) {
  result = num1 * 2;
  console.log("Double of num1: ", result);
} else {
  result = num1 + num2;
  console.log("sum of num1 and num2: ", result);
}

// using ternary
// num1 > num2
//   ? console.log("Double of num1: ", (result = num1 * 2))
//   : console.log("sum of num1 and num2: ", (result = num1 + num2));

let results = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);

/***
TASK 6: Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 30;
let ticketPrice = 800;
let isStudent = false;

if (age < 10) {
  console.log("Free Ticket");
} else if (isStudent) {
  let discount = (ticketPrice * 50) / 100;
  ticketPrice -= discount;
  console.log("After 50% discount for students: ", ticketPrice);
} else if (age >= 60) {
  let discount = (ticketPrice * 15) / 100;
  ticketPrice -= discount;
  console.log("After 15% discount for Senior Citizen: ", ticketPrice);
} else {
  console.log("Regular Ticket fare: ", ticketPrice);
}
