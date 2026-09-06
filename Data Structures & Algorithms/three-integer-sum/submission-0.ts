class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result = [];
        const n = nums.length;
        nums.sort((a, b) => a-b);

        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i - 1] === nums[i]) continue;

            let l = i + 1,
                r = n - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum === 0) {
                    result.push([nums[i], nums[l], nums[r]]);
                    while (l < r && nums[l + 1] === nums[l]) l++;
                    while (l < r && nums[r - 1] === nums[r]) r--;
                    l++;
                    r--;
                } else if (sum < 0){
                    l++
                } else r--
            }

        }
            return result;
    }
}
