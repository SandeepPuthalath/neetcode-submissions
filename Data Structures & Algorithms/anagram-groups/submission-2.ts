class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let result = {};

        for( const word of strs){
            const charArr = new Array(26).fill(0);

            for(const char of word){
                charArr[char.charCodeAt(0) - 97] += 1
            }

            if(!(charArr.join(',') in result)){
                result[charArr.join(',')] = []
            }

            result[charArr.join(',')].push(word)
        }

        return Object.values(result);
    }
}
