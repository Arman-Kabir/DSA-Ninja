/* #https://www.youtube.com/watch?v=5Boqfjissv0

    prerequisite:
    Iteration/Loops
    Functions
    *Recursion and Iteration vai-vai
    *Tasks that are done by iteration- all tasks can be done using recursion.
    Trees , Graphs algorithms use Recursion 

    *When recursion happens inside memory - all the function calls is saved in stack form....When in memory new stack layer is created, As many parameters inside function - new memory space is created for all parameters - in every function call.

    *If we don't keep base case in recursion- in one point our memory gets full and stack overflow problem occurs.

    *We don't use the same variable like iteration in recursion.
*/

// function printNumb(n) {
//     if (n == 0) return;
//     console.log(n);
//     printNumb(n - 1);
// }
// printNumb(5);

// function printSum(i, n, sum) {
//     if (i == n) {
//         sum += i;
//         console.log(sum);
//         return;
//     };
//     sum += i;
//     printSum(i+1,n,sum);
//     console.log(i);
// };
// console.log(printSum(1,5,0));

function calcFactorial(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    let fact_nm1 = calcFactorial(n - 1);
    let fact_n = n * fact_nm1;
    return fact_n;
};

console.log(calcFactorial(5));   

