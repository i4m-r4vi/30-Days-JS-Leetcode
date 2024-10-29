/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length==0){
        return init
    }else{
        for (i=0;i<nums.length;i++){
            val=fn(init,nums[i])
            init=val
        }
        return val
    }
    
};

function sum(accum, curr) { return accum + curr; }
function sum(accum, curr) { return accum + curr * curr; }
function sum(accum, curr) { return 0; }

nums = []
init = 100
newArray=reduce(nums,sum,init)
console.log(newArray);
