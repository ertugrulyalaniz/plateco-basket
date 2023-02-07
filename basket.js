class Basket {
  constructor(catalogue, deliveryRules, offers) {
    this.catalogue = catalogue;
    this.deliveryRules = deliveryRules;
    this.offers = offers;
    this.itemCount = {};
  }

  add(productCode) {
    if (!this.catalogue[productCode]) {
      throw new Error(
        `Product with code ${productCode} not found in catalogue.`
      );
    }
    if (this.itemCount[productCode]) {
      this.itemCount[productCode] += 1;
    } else {
      this.itemCount[productCode] = 1;
    }
  }

  remove(productCode) {
    if (!this.itemCount[productCode]) {
      throw new Error(`Product with code ${productCode} not found in basket.`);
    }
    this.itemCount[productCode] -= 1;
  }

  reset() {
    this.itemCount = {};
  }

  getTotal() {
    let total = 0;

    if (Object.keys(this.itemCount).length === 0) {
      return 0;
    }

    for (const product in this.itemCount) {
      total += this.catalogue[product] * this.itemCount[product];
    }

    total = this.applyOffers(total);

    const deliveryCost = this.calculateDeliveryCost(total);
    return this.parseFloat(total + deliveryCost, 2);
  }

  applyOffers(total) {
    this.offers.forEach((offer) => {
      const product = Object.keys(offer)[0];
      const minQty = offer[product].minQty;
      const discount = offer[product].discount;
      const productCount = this.itemCount[product] || 0;
      if (productCount >= minQty) {
        const discountableProductCount = Math.floor(productCount / minQty);
        total -= this.catalogue[product] * discount * discountableProductCount;
      }
    });
    return total;
  }

  calculateDeliveryCost(total) {
    for (const [threshold, cost] of this.deliveryRules) {
      if (total >= threshold) {
        return cost;
      }
    }
    return 0;
  }

  parseFloat(str, val) {
    str = str.toString();
    str = str.slice(0, str.indexOf('.') + val + 1);
    return Number(str);
  }
}

export default Basket;
