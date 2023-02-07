# PlateCO Basket

This is a shopping basket implementation that allows you to add and remove items, calculate the total price including delivery cost and offers, and reset the basket.

## Installation

This package is not available on npm, so you need to manually add the code to your project.

## Usage

To use the Basket class, you need to import it and create a new instance. You also need to pass in a catalogue object that maps product codes to their prices, deliveryRules array of tuples that define the delivery cost based on the total basket value, offers array of objects that define discounts for certain products

```javascript
import Basket from './Basket';

const catalogue = {
  'ult_small': 24.9,
  'ult_medium': 29.9,
  'ult_large': 44.9,
};

const deliveryRules = [
  [0, 0],
  [50, 5],
  [100, 10],
];

const offers = [
  { 'ult_small': { minQty: 3, discount: .1 } },
  { 'ult_large': { minQty: 4, discount: .15 } },
];

const basket = new Basket(catalogue, deliveryRules, offers);
```

## Add a product to the basket

Use the add method to add a product to the basket. You need to pass in the product code as an argument.

```javascript
basket.add('ult_small');
```

## Remove a product from the basket

Use the remove method to remove a product from the basket. You need to pass in the product code as an argument.

```javascript
basket.remove('ult_small');
```

## Reset the basket

Use the reset method to remove all products from the basket.

```javascript
basket.reset();
```

## Calculate the total price

Use the getTotal method to calculate the total price of all products in the basket, including delivery cost and offers. The method returns a float with two decimal places.

```javascript
const total = basket.getTotal();
console.log(total);
```

### License

This project is licensed under the MIT License.
