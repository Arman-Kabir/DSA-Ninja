/*
What is a program ?
well a program has to do some simple things
 - allocate memory
 -parse and execute

*V8 engine reads the javascript that we write in changes into machine executable instructions for the browser.. Now the browser consists of two parts a memory heap and a call stack. 
*Memory heap where the memory allocation happens. 
*Call stack where our code is read and executed. It tells you where you are in the program. 

*Memory leak- memory leaks happen when we have unused memory fills up the memory heap.. 

*Javascript run-time environment has Web APIs
that has 3 things -> DOM, AJAX, Timeout


*/

const a = 1;
const b = 10;
const c = 100;

console.log('1');
console.log('3');
setTimeout(() => {
    console.log('2');
},8000);
