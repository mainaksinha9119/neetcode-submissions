class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var numsSort = nums.map((val,index)=>({val,index}));
        numsSort.sort((a,b)=> a.val-b.val)
        var lPointer =0, rPointer = nums.length -1;

        while(lPointer<=rPointer) {
          if(numsSort[lPointer]['val']+ numsSort[rPointer]['val'] == target) {
                 console.log(numsSort)
                return [numsSort[lPointer]['index'],numsSort[rPointer]['index']]
          } 
            if(numsSort[lPointer]['val']+ numsSort[rPointer]['val'] < target) {
                lPointer =lPointer + 1;
            }
             if(numsSort[lPointer]['val']+ numsSort[rPointer]['val'] > target) {
                rPointer = rPointer -1
            }

            
        }

    }
}
