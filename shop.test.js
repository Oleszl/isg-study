import Shop from "./shop";

let shop;

beforeEach(() => {
  shop = Shop();
});

describe("getBalance()", () => {
  test("should return initial balance of the shop", () => {
    expect(shop.getBalance()).toBe("10.00");
  });
});

describe("sellWater()", () => {
  test("should increase balance of the shop and decrease amount of water", () => {
    const amount = 5;
    const initialWaterCount = shop.getWaterCount();
    const afterSellWaterCount = initialWaterCount - amount;
    shop.sellWater(amount);
    expect(shop.getBalance()).toBe("20.00");
    expect(shop.getWaterCount()).toBe(afterSellWaterCount);
  });
  test("should throw an error due to running out of water in the Shop", () => {
    expect(() => {
      shop.sellWater(1000);
    }).toThrow(Error("There isn't enough water in Shop"));
  });
});

describe("buyWater()", () => {
  test("should decrease shop balance and increase water amount", () => {
    const amount = 5;
    const optPrice = 0.75 * shop.getWaterPrice();

    const initialWaterCount = shop.getWaterCount();
    const initialBalance = shop.getBalance();

    shop.buyWater(amount);
    const afterBuyWaterCount = initialWaterCount + amount;

    expect(initialBalance).toBe("10.00");
    expect(shop.getWaterCount()).toBe(afterBuyWaterCount);
    expect(shop.getBalance()).toBe(
      (initialBalance - optPrice * amount).toFixed(2)
    );
  });

  test("should throw an arror due to no money in the Shop", () => {
    expect(() => {
      shop.buyWater(1000);
    }).toThrow(Error("Sorry, there isn't enough money in Shop"));
  });
});

describe("sellCoffee()", () => {
  test("should increase balance of the shop and decrease amount of coffee", () => {
    const amount = 5;
    const initialCoffeeCount = shop.getCoffeeCount();
    const afterSellCoffeeCount = initialCoffeeCount - amount;
    shop.sellCoffee(amount);
    expect(shop.getBalance()).toBe("30.00");
    expect(shop.getCoffeeCount()).toBe(afterSellCoffeeCount);
  });
  test("should throw an error due to running out of coffee in the Shop", () => {
    expect(() => {
      shop.sellCoffee(1000);
    }).toThrow(Error("There isn't enough Coffe in shop"));
  });
});

describe("buyCoffee()", () => {
  test("should decrease shop balance and increase coffee amount", () => {
    const amount = 3;
    const optPrice = 0.75 * shop.getCoffeePrice();

    const initialCoffeeCount = shop.getCoffeeCount();
    const initialBalance = shop.getBalance();

    shop.buyCoffee(amount);
    const afterBuyCoffeeCount = initialCoffeeCount + amount;

    expect(initialBalance).toBe("10.00");
    expect(shop.getCoffeeCount()).toBe(afterBuyCoffeeCount);
    expect(shop.getBalance()).toBe(
      (initialBalance - optPrice * amount).toFixed(2)
    );
  });

  test("should throw an arror due to no money in the Shop", () => {
    expect(() => {
      shop.buyCoffee(1000);
    }).toThrow(Error("Sorry, there isn't enough money in Shop"));
  });
});
