//1
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}

console.log("\n");

//2
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

//3
let number;

do {
  number = prompt("Please, provide a number greater than 100", 0);
} while (number <= 100 && number);

console.log("\n");

//4
outer: for (let n = 2; n <= 10; n++) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) continue outer;
  }

  console.log(n);
}
