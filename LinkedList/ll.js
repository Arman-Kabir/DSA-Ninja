class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// const newNode = new Node(10);
// console.log(newNode);

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // adding node at the end of the Linked List
    // time complexity O(1)
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    // adding node at the beginning
    // time com --> O(1)
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
    }
}

const linkedList = new LinkedList(10);
linkedList.push(11);
linkedList.unshift(12);
console.log(linkedList);