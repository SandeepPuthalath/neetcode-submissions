class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        let i = 0;
        let longest = 0;
        const window = new Set()

        for(let j=0; j<s.length; j++){
            while (window.has(s[j])){
                window.delete(s[i]);
                i++
            }
            window.add(s[j])
            
            if(longest < (j - i + 1)){
                longest = j - i + 1
            }
        }

        return longest;
    }
}
