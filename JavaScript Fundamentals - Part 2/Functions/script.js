'use strict';

function logger() {
    console.log('Hello');
}

// calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log(`********************************`);

//Exercise
function describeCountry(country, population, capitalCity) {
    const desc = `${country} has ${population} people and its capital city is ${capitalCity}.`;
    return desc;
}

const india = describeCountry('India', '1.39', 'Delhi');
const pakistan = describeCountry('Pakistan', '100 million', 'Islamabad');
const australia = describeCountry('Australia', '500 million', 'Canberra');
console.log(india);
console.log(pakistan);
console.log(australia);
