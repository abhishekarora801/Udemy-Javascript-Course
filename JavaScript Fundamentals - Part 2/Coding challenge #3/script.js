'use strict';

const mark = {
    fullName: 'Mark Johnson',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

console.log(mark.calcBMI(), john.calcBMI());
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})!`);
}
else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})!`);
}
