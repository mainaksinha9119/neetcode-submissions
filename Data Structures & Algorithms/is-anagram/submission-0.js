class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       var sortedArr= s.split('').sort().join('');
        var sortedArr2 =t.split('').sort().join('');
        if(sortedArr == sortedArr2) {
            return true
        }
         else{
            return false
         }
    }
}
