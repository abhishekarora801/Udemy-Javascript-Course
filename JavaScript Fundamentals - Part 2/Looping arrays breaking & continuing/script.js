'use strict';

const jonasArray = [
    'Abhishek',
    'Arora',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
//jonasArray[5] doesn't exist.
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
    console.log(`Element at place ${i} : ${jonasArray[i]}`);
    console.log(typeof jonasArray[i]);

    //filling types array - Method 1
    //types[i] = typeof jonasArray[i];

    //filling types array - Method 2
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

function calcAge(year) {
    return 2022 - year;
}
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(calcAge(years[i]));
}
console.log(ages);

//continue statement & break statement.
console.log(`---Only strings-using continue--`);
for (let i = 0; i < jonasArray.length; i++) {

    if (typeof jonasArray[i] !== 'string') continue; //will only go inside, if its string!
    console.log(`Element at place ${i} : ${jonasArray[i]}`);
}

console.log(`---break with NUMBER---`);
for (let i = 0; i < jonasArray.length; i++) {

    if (typeof jonasArray[i] === 'number') break; //when number is found, loop is terminated.
    console.log(`Element at place ${i} : ${jonasArray[i]}`);
}

console.log(`---Exercise---`);
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
for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageOfWorld(populations[i]);
}
console.log(percentages2);