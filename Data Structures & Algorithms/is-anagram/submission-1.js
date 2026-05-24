class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         var map = new Map()
         var map1= new Map();
         for(var i=0;i<s.length;i++) {
            map.set(s[i],(map.get(s[i])?1+map.get(s[i]):1))
         }
         for(var i=0;i<t.length;i++) {
            map1.set(t[i],(map1.get(t[i])?1+map1.get(t[i]):1))
         }

        if(map.size != map1.size) {
            return false
        }
        for(const [key,val] of map1) {
            console.log(key, 'map',map.has(key) )
            if(map.get(key)!=val || !map.has(key)) {
                return false
            }
        }
        return true
    }   
}
