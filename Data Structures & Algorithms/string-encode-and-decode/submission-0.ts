class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res ='';
        if(strs.length ==0) {
            return '';
        }
        for(let i=0;i<strs.length;i++) {
            res+=strs[i];
            res+="-";
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let arr =[]
        if(str && str.length == 0) {
            return []
        }
        else{
                var curr ='';
            for(let i=0;i<str.length;i++) {
                if(str[i] != '-') {
                    curr+=str[i];
                } else {
                    arr.push(curr)
                    curr = '';
                }
                
            }
        }
        return arr
    }
}
