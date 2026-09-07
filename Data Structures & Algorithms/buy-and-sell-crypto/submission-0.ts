class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (const price of prices) {
            if (minPrice >= price) {
                minPrice = price;
            } else {
                const profit = price - minPrice;

                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}
