// let a = 5;
// let b = 2;

// console.log("a++ = ", ++a);

// Conditional Statement
// let age = 19;

// if (age > 18) {
//   console.log("you are too good");
// }

// if (age >= 20) {
//   console.log("lullu");
// }

// let follow = "trued";
// let rohan;

// if (follow === "true") {
//   rohan = "yes";
// } else {
//   rohan = "no";
// }
// console.log(rohan);

// let num = 21;
// if (num % 2 === 0) {
//   console.log(num, "even");
// } else {
//   console.log(num, "odd");
// }

// let age = 19;
// let man;
// if (age <= 18) {
//   man = "junior";
// } else if (age > 60) {
//   man = "senior";
// } else {
//   man = "young";
// }
// console.log(man);

// let mode = "white";
// let color;

// if (mode === "black") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "white") {
//   color = "white";
// } else {
//   color = "pink";
// }
// console.log(color);

// let num = prompt("input a number:");

// if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
// } else {
//   console.log(num, "is NOT a multiple of 5");
// }

let score = prompt("write your Xm number");
let grade;
if (score >= 90 && score <= 100) {
  grade = "A+";
} else if (score >= 70 && score <= 89) {
  grade = "A";
} else if (score >= 60 && score <= 69) {
  grade = "A-";
} else if (score >= 50 && score <= 59) {
  grade = "B";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log(grade);
