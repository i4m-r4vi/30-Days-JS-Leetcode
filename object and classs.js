function names(name){
    return {
        class:function(classes){
            return {classes,name}
        }
    }
}

func=names('ravi').class('ta')
console.log(func);