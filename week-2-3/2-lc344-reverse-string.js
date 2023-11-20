
var reverseString = function (s) {
    // let reversed = [];
    // console.log(reversed);
    // console.log(s);

    // for (let i = s.length - 1; i >= 0; i--) {
    //     console.log(i);
    //     reversed.push(s[i]);
    // }
    // return reversed;
    let n = s.length;
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[i];
        s[i] = s[n-i-1];
        s[n-i-1] = temp;
    }
    // console.log(s);

};

console.log(reverseString(["h", "e", "l", "l", "o", "b"]));