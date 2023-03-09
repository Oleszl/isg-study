// 1. Створіть функцію яка клонує об'єкти

const deepClone = (obj) => {
  const keys = Object.keys(obj);

  return keys.reduce((acc, element) => {
    if (typeof obj[element] === "object") {
      acc[element] = deepClone(obj[element]);
      return acc;
    } else {
      acc[element] = obj[element];
      return acc;
    }
  }, {});
};

//Second approach
// const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const originalUser = {
  id: 1,
  personalInformation: {
    firstName: "Oles",
    lastName: "Sukmanovskyi",
    age: 21,
  },
};

const clonedUser = deepClone(originalUser);

console.log(originalUser === clonedUser); //false

// 2. Створіть функцію яка порівнює два об'єкти

const equals = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

console.log("Equals: " + equals(originalUser, clonedUser)); //true

// 3. Створіть об'єкт, який містить список товарів в інтернет-магазині. Кожен товар повинен мати назву, ціну та кількість на складі. Реалізуйте функцію, яка приймає назву товару та кількість, і повертає загальну вартість замовлення.

const shop = {
  products: [
    {
      productName: "beer",
      price: 5.49,
      amount: 15,
    },
    {
      productName: "rum",
      price: 17.99,
      amount: 5,
    },
    {
      productName: "whiskey",
      price: 19.99,
      amount: 10,
    },
    {
      productName: "wine",
      price: 9.99,
      amount: 11,
    },
  ],

  order(productName, amount) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productName === productName.toLowerCase()) {
        if (this.products[i].amount >= amount) {
          this.products[i].amount -= amount;
          let sum = amount * this.products[i].price;
          return `${sum.toFixed(2)}$ for ${
            this.products[i].amount
          } bottles of ${this.products[i].productName}`;
        } else
          return `Sorry, only ${this.products[i].amount} bottles of ${this.products[i].productName} is available`;
      }
    }
    return "This product is not available";
  },
};

console.log(shop.order("beer", 10));
console.log(shop.order("beer", 6));
console.log(shop.order("wine", 6));

// 4. Створити функцію-конструктор "Книга" з властивостями "назва", "автор" та "рік видання". Створити декілька об'єктів за допомогою цієї функції та вивести їх властивості у консоль.

function Book(name, author, releaseDate) {
  this.name = name;
  this.author = author;
  this.releaseDate = releaseDate;
}

const tolkienPart1 = new Book(
  "The Fellowship of the Ring",
  "J. R. R. Tolkien",
  1954
);
const tolkienPart2 = new Book("The Two Towers", "J. R. R. Tolkien", 1954);
const tolkienPart3 = new Book(
  "The Return of the King",
  "J. R. R. Tolkien",
  1955
);

console.log(tolkienPart1);
console.log(tolkienPart2);
console.log(tolkienPart3);

// 5. Напишіть функцію, яка приймає на вхід число та перевіряє, чи є воно простим числом.
const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log("Is prime number: " + isPrimeNumber(4));

// 6. Напишіть функцію, яка приймає на вхід число та повертає його факторіал.
let factorial = (num) => {
  let result = 1;
  for (var i = 2; i <= num; i++) result *= i;
  return result;
};

console.log(factorial(5));

// 7. Напишіть функцію, яка приймає на вхід рядок та перевіряє, чи є він паліндромом
const isPolindrom = (str) => {
  let reverseStr = str.split("").reverse().join("");
  return reverseStr == str;
};

console.log("Madam is Polindrom? " + isPolindrom("madam"));
console.log("Racecar is Polindrom? " + isPolindrom("racecar"));

// 8. Напишіть функцію, яка приймає на вхід рядок та перетворює його в рядок з верхнім регістром.
const textToUpperCase = function (inputText) {
  return inputText.toUpperCase();
};
console.log(textToUpperCase("Some text"));

// 9. Напишіть функцію, яка приймає на вхід масив строк та повертає новий масив, який містять тільки унікальні значення.
const uniqueArrValues = (arr) => {
  return arr.filter((item, index, array) => array.indexOf(item) == index);
};
const arrWithDuplicates = [10, 8, 5, 9, 9, 1, 1, 10, 7, 9];
console.log(uniqueArrValues(arrWithDuplicates));

//Set
const arrWithoutDuplicates = Array.from(new Set(arrWithDuplicates));
console.log(arrWithoutDuplicates);

// 10. Напишіть функцію, яка приймає на вхід дату та повертає час у форматі "години:хвилини AM/PM".
const currentDate = new Date();
console.log(currentDate);

const time = (date) => {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

console.log(time(new Date()));
