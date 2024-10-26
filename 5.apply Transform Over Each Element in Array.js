/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray =[];
    for(let i=0;i<arr.length;i++){
        returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray
};
function plusone(n){
    return n+1
}

function plusI(n,i){
    for (i=0;i<n;i++){
        sum=n+i
        return sum
    }
}
function constant(){
    const num=42
    return num
}
arr = [1,2,3]
const newArray = map(arr, plusone); 
console.log(newArray);