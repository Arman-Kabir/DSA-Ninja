
function printNumb(n) {
    if(n==0){
        return;
    }
    console.log(n);
    printNumb(n-1);
}

console.log(printNumb(5));