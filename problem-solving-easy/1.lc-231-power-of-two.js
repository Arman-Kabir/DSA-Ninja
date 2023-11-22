var isPowerOfTwo = function(n) {
    let result = 1;
    while(result <= n){
        if(n===1){
            return true;
        }
        result = result *2;
        if(result ===n){
            return true;
        }
    }
    return false;
};

console.log(isPowerOfTwo(1));