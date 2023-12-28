/*
Data structures are simply things that we can build from scratch,
we can create whatever data structure we want.

*Arrays in js are just objects with integer based keys that act like indexes and that's what we're going to build.

*Method means a function within a class.

 */

//  this.data is just refering to this data that we've created in the constructor.

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        console.log(this.data);
        return this.data[index];
    }

    getAllData(){
        return this.data;
    }

    push(item) {
        if (!item) return;
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

}

const newArray = new MyArray();
console.log(newArray.push('hi'));
console.log(newArray.push('u'));
console.log(newArray.push('bro'));
console.log(newArray.push('ok'));
console.log(newArray.push('fine'));
// console.log(newArray.pop());
console.log(newArray.get(1));

console.log(newArray.delete(2));
console.log(newArray);
console.log(newArray.getAllData());