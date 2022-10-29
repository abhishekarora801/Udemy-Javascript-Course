'use strict';

// FUNCTIONS ARE A VALUE IN JS !!
//function declaration:
//DECLARATION CAN BE CALLED BEFORE YOU DEFINE IT!
const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    return 2037 - birthYear;
}

console.log(`*****************************`);

//function Expression:
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1995);
console.log(age2);

console.log(`****Starting exercise****`);

function percentageOfWorld1(country, population) {
    const worldPopulation = 7900;
    const percentageOfCountry = (population / worldPopulation) * 100;

    const countryDesc = `${country} has ${population} people, so it's about ${percentageOfCountry}% of world population.`;
    return countryDesc;
}

const india = percentageOfWorld1('India', 790);
const pakistan = percentageOfWorld1('Pakistan', 360);
const unitedStates = percentageOfWorld1('United States', 1580);
console.log(india);
console.log(pakistan);
console.log(unitedStates);

console.log(`***Using function expression now***`);

const percentageOfWorld2 = function (country, population) {
    const worldPopulation = 7900;
    const percentageOfCountry = (population / worldPopulation) * 100;

    const countryDesc = `${country} has ${population} people, so it's about ${percentageOfCountry}% of world population.`;
    return countryDesc;
}

const india1 = percentageOfWorld1('India', 790);
const pakistan1 = percentageOfWorld1('Pakistan', 360);
const unitedStates1 = percentageOfWorld1('United States', 1580);
console.log(india1);
console.log(pakistan1);
console.log(unitedStates1);
