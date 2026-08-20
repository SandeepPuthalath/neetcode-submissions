class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        const sizes = [];

        for(const str of strs){
            sizes.push(str.length)
        }

        let res = []
        for(const sz of sizes){
            res.push(String(sz), ',');
        }
        res.push('#', ...strs);
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str.length === 0) return [];

        let sizes = [],
        res = [],
        i = 0;

        while(str[i] !== '#'){
            let j = i;
            while(str[j] !== ','){
                j++;
            }
            sizes.push(parseInt(str.substring(i, j), 10));
            i = j + 1;
        }
        i++
        for(let sz of sizes){
            res.push(str.substr(i, sz))
            i += sz
        }

        return res;
    }
}
