class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map();
        nums.forEach(value=>{

            if(!map.has(value)) {
                map.set(value,0);
            }

            map.set(value,map.get(value)+1);
        })
        var arr= Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a));
        return arr.slice(0, k);
    }
}
