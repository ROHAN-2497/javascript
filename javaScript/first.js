const studentMarks = [85, 97, 44, 37, 76, 60];

// create a variable for the sum and initialize it
let sum = 0;

// iterate over each item in the array
for (let i = 0; i < studentMarks.length; i++) {
  sum += studentMarks[i];
}
let average = sum / studentMarks.length;
console.log(`avarage marks of the class ${average.toFixed()}`);
