import Shop from './shop';

let shop;

beforeEach(() => {
    shop = Shop();
});

describe('getBalance()', () => {
    test('should return initial balance of the shop', () => {
        expect(shop.getBalance()).toBe('0.00$');
    });
});

describe('buyWater()', () => {
    test('should return 10$', () => {
        expect(shop.sellWater(5)).toBe(shop.balance = 10);
    });
});