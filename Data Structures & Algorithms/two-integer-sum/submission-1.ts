class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const comps = {}

        for(let i=0; i< nums.length; i++){
            const compliment = target - nums[i];

            if(compliment in comps){
                return [i, comps[compliment]]
            }

            comps[nums[i]] = i
        }

    }
}
