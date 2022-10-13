//Coding Challenge #1

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = johnBMI > markBMI;

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

