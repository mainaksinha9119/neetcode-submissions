class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var map = new Map();
        for(var i=0;i<strs.length;i++) {
        var arr = new Array(26).fill(0);
          var ele =strs[i];
          for(var e=0;e<ele.length;e++) {
            var c = ele.charCodeAt(e);
            arr[c-'a'.charCodeAt(0)]+=1
          } 
          const key = arr.join(',')  
          if(!map.get(key)) {
            map.set(key,[]);
          }
          map.get(key).push(ele)

        }
        return [...map.values()]
    }
}
