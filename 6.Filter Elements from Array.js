/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var filteredArr = []
    for (var i=0;i<arr.length;i++){
            if (fn(arr[i],i)){
               filteredArr.push(arr[i])
            }
        } 
        return filteredArr 
    }
    
function greaterThan10(n) { 
    return n > 10; 
}

function firstIndex(n, i) { 
    return i===0;    
}

function plusOne(n) { 
    return n + 1 
}


arr = [1,2,3]
const newArray = filter(arr, firstIndex);
console.log(newArray);