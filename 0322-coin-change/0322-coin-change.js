/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const result = Array(amount + 1).fill(Infinity);
    result[0] = 0;

    for (let i = 1; i <= amount; i++) {
      for (let coin of coins) {
        if (i >= coin) {
          result[i] = Math.min(result[i], result[i - coin] + 1);
        }
      }
    }

    return result[amount] === Infinity ? -1 : result[amount];
};