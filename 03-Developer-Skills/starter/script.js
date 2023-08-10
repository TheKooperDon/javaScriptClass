


// Remember, we're gonna use strict mode in all scripts now!
'use strict';


//challenge 3

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        `${this.mass / (this.height * this.height)}`;
        return
    }
};

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    //this needs to be a property of bmi 
    calcBMI: function () {
        return `${this.mass / (this.height * this.height)}`
    }
}

console.log

//const maker = (fullName, mass, height) => {


//}
console.log(john.calcBMI());
console.log(mark.calcBMI());
console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName} (${mark.calcBMI()})!)`)
