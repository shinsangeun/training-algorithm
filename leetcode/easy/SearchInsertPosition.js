/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target) > -1){
        return parseInt(nums.indexOf(target));
    }else{
        nums.push(target);
        nums.sort(function(a, b)  {
            return a - b;
          });

        // nums.sort();

        console.log("nums:", nums)
        return parseInt(nums.indexOf(target));
    }
};



console.log("searchInser:", searchInsert([3,5,7,9,10], 8))

searchInsert([3,5,7,9,10], 8);