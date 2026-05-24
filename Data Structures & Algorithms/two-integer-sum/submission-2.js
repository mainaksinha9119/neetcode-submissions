class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var map = new Map();
        for(var i=0;i<nums.length;i++) {
            map.set(nums[i], i)
        }
        for(var i=0;i<nums.length;i++) {
           if((!!map.get(target-nums[i]) || map.get(target-nums[i]) == 0)
           && i!=map.get(target-nums[i])) {
        console.log(nums[i],i,map.get(target-nums[i]))
             return[i,map.get(target-nums[i])]
           }
        }
    }
}
