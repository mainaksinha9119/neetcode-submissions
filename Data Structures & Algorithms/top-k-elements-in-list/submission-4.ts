class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        var map = new Map();
        let  n = nums.length;
        let arr = Array.from({length: n+1},()=>[]);
        let finalArr = [];
        nums.forEach(value=> {
            map.set(value,map.has(value)?map.get(value)+1:1)

        })
        for( const [key,val] of map) {
          arr[val].push(key)
        }

        for(let i=arr.length-1;i>=0;i--) {
            if(arr[i] && arr[i].length>0) {
                for (const num of arr[i]) {
            finalArr.push(num);

                }

            }
            if(finalArr.length ==k) {
            break;
            }
        }
        return finalArr
    }
}
