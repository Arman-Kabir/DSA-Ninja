/*#4 Advanced objects concepts
3 things important about objects 

objects are called reference types.

primitive types are defined by programming language-- > 

* Scope is created when it sees curly braces

* Context tells you where we are within the object

* this refers to what object it's inside of.It tells us what object we are inside of.

// instantiation
*instantiation is when you make a copy of an object and reuse a code.  
* 

 */
//reference types
var object1 = { value: 12 };
var object2 = object1;

console.log(object2);


//context --> context gets confused a lot with scope

const object4 = {
    a:function(){
        console.log(this);
    }
}

console.log(object4.a);

// instantiation