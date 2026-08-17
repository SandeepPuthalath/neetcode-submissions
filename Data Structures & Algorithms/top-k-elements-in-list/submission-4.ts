class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let counts = {};

        for(const num of nums){
            if(!(num in counts)){
                counts[num] = 0
            }

            counts[num] += 1;
        }

        const freqs: [string, number][] = Object.entries(counts);

        return freqs.sort((a:[string, number], b:[string, number]) => b[1] - a[1]).slice(0, k).map(([key, value]) => Number(key))
    }
}
