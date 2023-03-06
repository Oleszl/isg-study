let age = prompt("How old are you?");
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?");
// }
checkAge(age);

function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(2, 9));

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("input x");
let n = prompt("input n");

if (n < 1) {
  alert(`Please, use a positive integer`);
} else {
  alert(pow(x, n));
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
