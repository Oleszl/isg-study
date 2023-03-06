//Task1
let answer = prompt("What is the “official” name of JavaScript?");

if (answer == "ECMAScript") alert("Right!");
else alert("You don’t know? ECMAScript!");

//Task2
let inputValue = prompt("Input a number", 0);

if (inputValue > 0) alert(1);
else if (inputValue < 0) alert(-1);
else alert(0);

//Task3
let a = 8,
  b = -1;
let result = a + b < 4 ? "Below" : "Over";

console.log(result);

//Task4
let login = "Director";

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

console.log(message);
