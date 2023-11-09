class Person {
    constructor(leg,arm){
        this.leg = leg
        this.arm = arm
    }
    walk(){
        console.log('is walking');
    }
    // properties
    leg = 2;
    arm = 2;

    //methods
}

const samim = new Person(2, 2);
const samima = new Person(2, 3);

console.log(samima.walk());