class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const seen = new Set(nums);
        let longest = 0;

        for (const num of nums) {
            if (!seen.has(num - 1)) {
                let current = num;
                let length = 1;
                while (seen.has(current + 1)) {
                    length++;
                    current++;
                }

                if (length > longest) longest = length;
            }
        }

        return longest;
    }
}
