// Q1. Add two Numbers 
// You are provided with two numbers A and B. Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.
// Input Format 
// The first line contains two integers A and B.
// Output Format = Return the result after adding two numbers.
// Constraints 
// 1≤A, B≤5001≤, ≤500


let a = 2
let b = 5;

function addTwoNumbers(x, y) {
    return x + y;
}
if (a >= 1 && b <= 5001) {
    let sum = addTwoNumbers(a, b);
    console.log("The sum of total number is: ", sum)
}
else {
    console.log("Error");
}