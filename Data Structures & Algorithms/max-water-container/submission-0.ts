class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l=0, r=heights.length - 1;
        let maxArea = 0;

        while(l < r){
            const h = Math.min(heights[l], heights[r]);
            const w = r - l
            const a = h * w;

            if(maxArea < a) maxArea = a;
            if(heights[l] < heights[r]) l++;
            else r--
        }

        return maxArea
    }
}
