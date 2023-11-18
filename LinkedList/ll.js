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
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
    }

    // remove from beginning
    // 
    shift() {
        if (!this.head) return null;
        const temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    // remove from the end of the list
// time complexity --> O(n)
    pop() {

        if (!this.head) return null;

        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }
}

const linkedList = new LinkedList(10);
linkedList.push(11);
linkedList.unshift(12);
console.log(linkedList);