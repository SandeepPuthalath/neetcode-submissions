class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        let charCount = {};

        for(const word of s){
            if(!charCount[word]){
                charCount[word] = 0
            }
            charCount[word]++
        }

        for(const word of t){
            if(!charCount[word]) return false;
            charCount[word]--
        }

        return true

    }
}
