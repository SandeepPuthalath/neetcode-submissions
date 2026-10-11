class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        
        let maxProfit = 0;
        let minPrice = prices[0];

        for(const price of prices){

            if(minPrice > price) minPrice = price;
            else if((price - minPrice) > maxProfit){
                maxProfit = price - minPrice;
            }
        }

        return maxProfit;
    }
}
