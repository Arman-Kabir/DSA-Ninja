/*
#6

#7

 */

// reverse a string
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof (str) !== 'string') {
        return ' not good'
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

console.log(reverse('hellob vai'));