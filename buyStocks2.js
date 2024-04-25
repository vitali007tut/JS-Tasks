// 122. Best Time to Buy and Sell Stock II
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const element = prices[i];
    const nextElement = prices[i + 1];
    if (element < nextElement) {
      result += nextElement - element;
    }
  }

  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// Output: 7
console.log(maxProfit([1, 2, 3, 4, 5]));
// Output: 4;
console.log(maxProfit([7, 6, 4, 3, 1]));
// Output: 0;
