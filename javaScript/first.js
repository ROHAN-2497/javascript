// Array

let prices = [250, 645, 300, 900, 50];
let price = 0;
for (let index = 0; index < prices.length; index++) {
  let offer = prices[index] / 10;
  prices[index] -= offer;
}
console.log(prices);
