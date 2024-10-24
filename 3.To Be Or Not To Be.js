/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:function(v){
            if (v===val){
                return true
            }else{
                throw Error('Error')
            }
        },
        notToBe:function(v){
            if (v!==val){
                return true
            }else{
                throw Error('Equal')
            }
        }
    }
};



func =
() => expect(5).notToBe(5)
console.log(func());

func =
() => expect(5).toBe(null)
console.log(func());




