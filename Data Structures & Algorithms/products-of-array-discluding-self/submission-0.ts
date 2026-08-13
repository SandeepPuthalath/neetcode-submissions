class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const result = new Array(nums.length).fill(0)
        let prifix = 1
        for(let i=0; i<nums.length; i++){
            result[i] = prifix;
            prifix *= nums[i]
        }

        console.log(result)

        let suffix = 1;
        for(let i=nums.length-1; i>=0; i--){
            result[i] *= suffix;
            suffix *= nums[i]
        }

        return result
    }
}
