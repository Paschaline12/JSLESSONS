//A Variable is a container that stores a value.
//The variable behaves as if it was the variable it contains
//There are two parts in declaring a variable i.e  
//declaration  let x;
// assigment x = 100;

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);

console.log(`You are ${age} years old!`);
console.log(`The price of pizza is ${price}`);
console.log(`Your gpa is ${gpa}`);
 //when you want to know the datatype you do the following:

console.log (typeof age);
console.log (typeof price);
console.log (typeof gpa);

let firstName = 'Paschaline';
let email = 'paschndoti@gmail.com';
console.log (typeof firstName);
console.log(`My first Name is ${firstName}`);
console.log(`My email is ${email}`);

let online = true;
console.log(typeof online);
console.log(`${firstName} is browsing online ${online}`);
let forsale = false;
console.log(`Is this car forsale ${forsale}`);

let fullname = 'Paschaline Ndoti Mwambi'
let myage = 32;
let Student = true;

document.getElementById("p1").textContent = ` My full names are: ${fullname}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `I am learning javascript: ${Student}`;



