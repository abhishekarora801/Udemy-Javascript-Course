'use strict';

function cutFruitPieces(fruit) {
    return fruit * 5;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples); //calling one function into another function.
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

console.log(`*************`);

//Exercise

function percentageOfWorld(myCountryPopulation) {
    const populationPercentage = (myCountryPopulation / 7900) * 100;
    return populationPercentage;
}
const describePopulation = (country, population) => {
    const percentage = percentageOfWorld(population);
    const finalAnswer = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    return finalAnswer;
}
console.log(describePopulation('Finland', 1441));
console.log(describePopulation('India', 790));
console.log(describePopulation('United States', 1580));
