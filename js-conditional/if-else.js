/**
 * if(condition){
 *   condition true hole code execute korbe
 * }else{
 *   condition false hole code execute korbe
 * }
 */

// let age = 17;

// if( age > 18 ){
//     console.log("You are an adult")

// }else{
//     console.log("You are a teenager")
// }

// ------------------ Practice ------------------ //

// ------------- Level 1: Basic Foundation --------------- //

// #1: Check - number is Positive or Negative or zero
let num = 10;
if (num > 0) {
  console.log("Positive Number");
} else if (num == 0) {
  console.log("Zero");
} else {
  console.log("Negative Number");
}

// #2: Check - number odd or even
if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// #3: Check -  Voting Eligibility
let age = 17;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// #4: Check - Pass or Fail
let mark = 17;
if (mark >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// ------------- Level 2: Slightly Practical --------------- //

// #5: Largest of Two Numbers
let num1 = 28;
let num2 = 28;

if (num1 > num2 || num2 > num1) {
  console.log("Big Number");
} else {
  console.log("Both Number are equal");
}

// #6: check which number is big
if (num1 > num2) {
  console.log("Num1 is big");
} else if (num2 > num1) {
  console.log("Num2 is big");
}

// #7: Largest of three Numbers
let num3 = 35;
if (num1 > num2 && num1 > num3) {
  console.log("Big Number is Num1");
} else if (num2 > num1 && num2 > num3) {
  console.log("Big Number is Num2");
} else {
  console.log("Big Number is Num3");
}

// #8: Largest of three Numbers and check all possibilities

let a = 65;
let b = 40;
let c = 59;
if (a === b && b === c) {
  console.log("all numbers are equal");
} else if (a === b && a > c) {
  console.log("a and b are equal and biggest");
} else if (a === c && c > b) {
  console.log("a and c are equal and biggest");
} else if (b === c && b > a) {
  console.log("b and c are equal and biggest");
} else if (a > b && a > c) {
  console.log("a is biggest");
} else if (b > a && b > c) {
  console.log("b is biggest");
} else {
  console.log("c is biggest");
}

// #9: Grade System

let marks = 40;
if (marks < 0 || marks > 100) {
  console.log("Invalid Marks");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else if (marks >= 40) {
  console.log("Grade: D");
} else {
  console.log("F");
}

// #10: Leap Year Checker
let year = 1992;
if (year % 400 === 0) {
  console.log("This year is a leap year");
} else if (year % 100 === 0) {
  console.log("This year is not a leap year");
} else if (year % 4 === 0) {
  console.log("This year is a leap year");
} else {
  console.log("This year is not a leap year");
}

// ------------- Level 3: Real-life Logic (Strong Foundation) --------------- //

// #11: Login System (Basic)

let username = "admin";
let password = 1234;

if (username === "admin" && password === 1234) {
  console.log("Login Succesfull");
} else {
  console.log("Invalid credentials");
}

// #12: Traffic Light System

let signal = "red"; // red or yellow or green

if (signal === "red") {
  console.log("Stop");
} else if (signal === "yellow") {
  console.log("Ready");
} else if (signam === "green") {
  console.log("Go");
} else {
  console.log("Invalid Signal");
}

// #13: Electricity Bill

let unit = 60;
let totalBill;
if (unit <= 50) {
  totalBill = unit * 5; // 0–50 → ৳5/unit
} else if (unit <= 100) {
  totalBill = 50 * 5 + (unit - 50) * 7; // 51–100 → ৳7/unit
} else {
  totalBill = 50 * 5 + 50 * 7 + (unit - 100) * 10; // 101+ → ৳10/unit
}
console.log(totalBill);

// ------------- Level 4: Thinking Booster --------------- //

// #14: Number Guessing Logic

let secretNumber = 7;
let userNumber = 7;

if (userNumber === secretNumber) {
  console.log("Correct");
} else if (userNumber > secretNumber) {
  console.log("Too High");
} else {
  console.log("Too Low");
}

// #15: Weekend or Weekday

let day = "Friday";
if (day === "Friday" || day === "Saturday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}
