/*
#2
a list that is linked
linked list is null terminated
const basket = ['apples','grapes','pears'];

linked-list:
apples
8647 -->grapes
        8742-->pears
                3722-->null

#4 ->in LL We need to use while loop as don't usually know how long this list is going to be.
*Most computers have caching system that make reading from sequential memory that is memory right next to each other -> Faster than reading scattered addresses. 
*Array items are located right next to each other in computer memory.
*LL and nodes are actually scattered all over memory. Kind of like hash tables.
*So, iterating through a LL or traversing through a LL is usually quite a bit slower than iterating through items like an array. However,technically both are O(n).

#5 -> Pointer: It's a reference to another place in memory or another object or another node.
*JS is garbase collected that is memory is managed automatically. Data that is not pointed by any variable or something -> gets automatically garbase collected and deleted because nothing is pointing to it. 

const obj1 = { a: true };
const obj2 = obj1;
console.log(obj1);

#6->think of node as a bucket of data
*Value can be anything we want and the next property has to be a pointer or a reference to the next node.

*/

let myLinkedList = {
        head: {
                value: 10,
                next: {
                        value: 5,
                        next: {
                                value: 16,
                                next: null
                        }
                }
        }
}

class Node {
        constructor(value) {
                this.value = value;
                this.next = null;
        }
}

class LinkedList {
        constructor(value) {
                this.head = {
                        value: value,
                        next: null
                }
                this.tail = this.head;
                this.length = 1;
        }
        append(value) {
                // const newNode = {
                //         value: value,
                //         next: null
                // };
                const newNode = new Node(value);
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
        }
        prepend(value) {
                // const newNode = {
                //         value: value,
                //         next: null
                // }
                const newNode = new Node(value);
                newNode.next = this.head;
                this.head = newNode;
                this.length++;
        };
        printList() {
                const array = [];
                let currentNode = this.head;
                while (currentNode !== null) {
                        array.push(currentNode.value);
                        currentNode = currentNode.next;
                }
                return array;
        }
        insert(index, value) {

        }
}

const myLinkedList1 = new LinkedList(10);
myLinkedList1.append(5);
myLinkedList1.append(16);
myLinkedList1.prepend(1);
console.log(myLinkedList1.printList());
myLinkedList1.insert(2, 99);
console.log(myLinkedList1);


