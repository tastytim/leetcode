var prices = [7, 1, 5, 3, 6, 4]; //5
var prices2 = [7, 6, 4, 3, 1]; //0
var prices3 = [7, 1, 5, 3, 6, 4]; //5
var prices4 = [1, 2, 4]; //3
var prices5 = [7, 6, 4, 3, 1]; //0

var maxProfit = function (prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (i of prices) {
    if (i < minPrice) {
      minPrice = i;
    } else if (i - minPrice > maxProfit) {
      maxProfit = i - minPrice;
    }
  }
  return maxProfit
};

console.log(maxProfit(prices5));
