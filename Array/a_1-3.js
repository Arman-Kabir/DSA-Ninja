/*
#1
Arrays which are sometimes called lists organizes items sequestially.Means one after another in memory
Arrays are stored in contiguous memory that is in order.
*/
const strings = ['a','b','c','d'];
// 4*4 = 16 bytes of storage

strings[2]; //O(1)

// push
strings.push('e'); // O(1)

//pop
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2,2,'alien'); //O(n/2)

console.log(strings);

/*
#2
Arrays are allocated in adjacent blocks of memory when they're created.
Dynamic array expands as you add more elements.
 */


