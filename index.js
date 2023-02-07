import Basket from './basket.js';

const catalogue = {
  R01: 32.95,
  G01: 24.95,
  B01: 7.95,
};

const deliveryRules = [
  [90, 0],
  [50, 2.95],
  [0, 4.95],
];

const offers = [
  {
    R01: {
      discount: 0.5,
      minQty: 2,
    },
  },
];

const basket = new Basket(catalogue, deliveryRules, offers);

basket.add('B01');
basket.add('G01');
console.log(basket.getTotal()); // 37.85
basket.reset();

basket.add('R01');
basket.add('R01');
console.log(basket.getTotal()); // 54.37
basket.reset();

basket.add('R01');
basket.add('G01');
console.log(basket.getTotal()); // 60.85
basket.reset();

basket.add('B01');
basket.add('B01');
basket.add('R01');
basket.add('R01');
basket.add('R01');
console.log(basket.getTotal());
basket.reset();
