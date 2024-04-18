
// #2
// var createCounter = function(n) {

//     return function(n) {
//         return n++;
//     };
// };

// ;

// console.log(createCounter(10)())

class Counter {
    constructor(n) {
        this.n = n;
    }

    increment() {
        return this.n++;
    }
};

const counter = new Counter(10)
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());