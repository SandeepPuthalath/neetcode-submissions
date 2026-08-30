class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map();

        for (const num of nums) {
            if (!counts.has(num)) {
                counts.set(num, 0);
            }
            counts.set(num, counts.get(num) + 1);
        }

        return Array.from(counts.entries())
            .sort((a: [string, number], b: [string, number]) => b[1] - a[1])
            .slice(0, k)
            .map(([key, value]) => Number(key));
    }
}
