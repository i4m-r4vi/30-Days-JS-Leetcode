var createHelloWorld = function() {
    
    return function(...args) {
        let news='Hello World'
        return news
    }
};
const f=createHelloWorld(12);
console.log(f());