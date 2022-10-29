'use strict';

//Arrow function
//useful for one-liner functions.
// no return keyword, or paranthesis.
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

console.log(`***********`);

//complex code
const yearsUntilRetirement = birthYear1 => {
    const age = 2037 - birthYear1;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

//multiple paranthesis - Important topic
const yearsUntilRetirement1 = (birthYear2, firstName) => {
    const age2 = 2037 - birthYear2;
    const retirement2 = 65 - age2;
    return `${firstName} still has ${retirement2} years left for retirement!`;
}

console.log(yearsUntilRetirement1(1991, 'Avinash'));
console.log(yearsUntilRetirement1(1995, 'Saurabh'));

//Exercise
const percentageOfWorld5 = (country, population) => {
    const worldPopulation = 7900;
    const percentageOfCountry = (population / worldPopulation) * 100;

    const countryDesc = `${country} has ${population} people, so it's about ${percentageOfCountry}% of world's population.`;
    return countryDesc;
}
console.log(percentageOfWorld5('India', 790));