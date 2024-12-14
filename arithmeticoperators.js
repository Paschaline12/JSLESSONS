//arithmetic operators = are operands (values, variables, etc)
//                      operators (+ - * /)
// exponents are represented by double asterisks **
// modulus is represented as % sign divided by two. 
let students = 30;

console.log(students);

// instead of the traditional operations we can use augmented assignment operators.

students -=2;
students +=3;
students *=2;
students /=3;
students **=3;
students %=2;

// to increase a variable by just one, we can use the increament operator which is 
students ++;

// to decrease a variable by just one, we can use the decreament operator, 
students --;

/* operator precedence in javascript we have

    1.paranthesis()
    2. Exponents
    3. Multiplication, division and modulus
    4. Addition and subtraction. 

*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

// How to accept user input:
let username;
username = window.prompt("What is your username?");
console.log(username);

//in the html text box the following apply there. 
let userpassname
document.getElementById("mySubmit").onclick = function(){
    userpassname = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userpassname}`

}