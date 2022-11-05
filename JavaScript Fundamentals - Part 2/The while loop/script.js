'use strict';

//Learning the while loop.

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
}

//Using while loop
let rep = 1;
while (rep <= 10) {
    console.log(` While loop: Lifting weights repitition ${rep}`);
    rep++;
}

//Using without counter!
let dice = Math.trunc(Math.random() * 6) + 1; //important methods

// console.log(dice);

// VERY IMPORTANT!!!
let counter = 0;
while (dice !== 6) {
    console.log(`I rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    counter += 1; //counting how many times, dice is rolled not displaying 6!
    if (dice === 6) {
        console.log(`Loop is about to end...`);
        console.log(`Dice is rolled ${counter} ${counter > 1 ? 'times' : 'time'} until 6 came!`);
    }
}

console.log(`Exercise:`);
const populations = [
    100,
    200,
    300,
    400
];
function percentageOfWorld(population) {
    return (population / 2000) * 100;
}
const percentages2 = [];
let i = 0;
while (i < populations.length) {
    percentages2[i] = percentageOfWorld(populations[i]);
    i++;
}
console.log(percentages2);


