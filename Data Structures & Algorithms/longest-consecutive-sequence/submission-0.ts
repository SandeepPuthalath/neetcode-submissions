class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const numSet = new Set(nums);
        let longest = 0;

        for(const num of nums){
            if(!numSet.has(num - 1)){
                let current = num
                let length = 1
                while(numSet.has(current + 1)){
                    current++
                    length++
                }

                if(longest < length) longest = length;
            }
        }

        return longest
    }
}
