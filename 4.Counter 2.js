/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num=init
    return {
        increment:()=>{
            return ++num
        },
        reset:()=>{
            return num=init
        } ,
        decrement:()=>{
            return --num
        }
        
    }
};
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4


const counter2 = createCounter(0)
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.reset());
console.log(counter2.reset());

