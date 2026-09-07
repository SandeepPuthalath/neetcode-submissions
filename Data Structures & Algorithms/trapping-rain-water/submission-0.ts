class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (!height || height.length < 3) return 0;

        let l = 0;
        let r = height.length - 1;
        let lMax = 0, rMax = 0;
        let water = 0;

        while (l < r) {
            if (height[l] < height[r]) {
                if(lMax <= height[l]){
                    lMax = height[l]
                } else {
                    water += lMax - height[l]
                }
                l++
            } else {
                if(rMax <= height[r]){
                    rMax = height[r]
                } else {
                    water += rMax - height[r]
                }
                r--
            }
        }

        return water;
    }
}
