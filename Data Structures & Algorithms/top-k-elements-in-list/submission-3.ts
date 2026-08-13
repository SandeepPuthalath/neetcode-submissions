class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        if(nums.length <= k) return nums;

        const freqs:Record<string, number> = {}

        for(const num of nums){

            if(!(num in freqs)){
                freqs[num] = 0
            }

            freqs[num] += 1;
        }

         return Object.entries(freqs)
            .sort((a, b) => b[1] - a[1])   
            .slice(0, k)                    
            .map(([key]) => Number(key));
    }
}
