// Реалізувати Shop з наступними властиостями та методами:
// - balance
// - getBalance
// - waterCount
// - waterPrice
// - sellWater
// - buyWater
// - coffeeCount
// - coffeePrice
// - sellCoffee
// - buyCoffee

const Shop = function () {
  let balance = 0.0;
  let waterCount = 15;
  let waterPrice = 2;
  let coffeeCount = 20;
  let coffeePrice = 4;

  function getBalance() {
    return balance.toFixed(2) + "$";
  }

  function sellWater(n=1) {
    if (waterCount < n) {
      return console.log("There isn't enough water in Shop");
    }
    waterCount -= n;
    balance += waterPrice * n;
    return `${n} bottles of water has been bought`;
  }

  function buyWater(n = 1) {
    let optPrice = waterPrice * 0.75;
    if (optPrice * n > balance)
      return "Sorry, there isn't enough money in Shop";
    balance -= optPrice * n;
    waterCount += n;
    return `${n} bottles of water has been added`;
  }

  function sellCoffee(n = 1) {
    if (coffeeCount < n) return console.log("There isn't enough Coffe in shop");
    coffeeCount -= n;
    balance += coffeePrice * n;
    return `${n} cups of Сoffe has been bought`;
  }

  function buyCoffee(n = 1) {
    let optPrice = coffeePrice * 0.75;
    if (optPrice * n > balance)
      return "Sorry, there isn't enough money in Shop";
    balance -= optPrice * n;
    coffeeCount += n;
    return `Coffee beans for ${n} cups has been added`;
  }

  return {
    getBalance: getBalance,
    sellWater: sellWater,
    buyWater: buyWater,
    sellCoffee: sellCoffee,
    buyCoffee: buyCoffee,
  };
};
const shop = Shop();
console.log("Initial Shop Balance " + shop.getBalance()); //0.00$
console.log("Water: " + shop.sellWater(5));
console.log("Shop Balance: " + shop.getBalance()); //10.00$
console.log("Water: " + shop.buyWater());
console.log("Shop Balance: " + shop.getBalance()); //8.50$
console.log("Coffe: " + shop.sellCoffee(20));
console.log("Shop Balance: " + shop.getBalance()); //88.50$
console.log("Coffe: " + shop.buyCoffee(20));
console.log("Coffe: " + shop.buyCoffee(5));
console.log("Shop Balance: " + shop.getBalance()); //13.50$
