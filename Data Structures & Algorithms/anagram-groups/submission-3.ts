class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let result = {};

        for( const word of strs){
            const counts = new Array(26).fill(0);

            for(const char of word){
                counts[char.charCodeAt(0) - 97] += 1
            }

            const key = counts.join(',')

            if(!(key in result)){
                result[key] = []
            }

            result[key].push(word)
        }

        return Object.values(result);
    }
}
