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
*/

const basket = ['apples','grapes','pears'];
