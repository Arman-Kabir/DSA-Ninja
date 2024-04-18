
// #1
var createHelloWorld = function() {

    return function(...args) {
        return "Hello World";
    }
};
createHelloWorld()

console.log(createHelloWorld()());

// let a = [1, 2];
// let b = [3, 4];
// console.log([...a, ...b]);

// function add(...args) {
//     console.log(args);
//     console.log(args[0] + args[1]);
// }

// add(8,2);



