class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var arrStr = [],
        map = new Map();
        strs.forEach(value=> {
            arrStr = value.split('').sort().join('');
            console.log('arrstr',arrStr)
            console.log('map.get(arrStr)',map.get(arrStr))
            if(!map.has(arrStr)) {
                map.set(arrStr,[])
            }

            map.get(arrStr).push(value);
        })
        return [...map.values()]
    }
}
