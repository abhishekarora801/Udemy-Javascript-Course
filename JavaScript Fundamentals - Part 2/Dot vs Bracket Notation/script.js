'use strict';

const jonasObject = {
    firstName: 'Abhishek',
    lastName: 'Arora',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
};
console.log(jonasObject);
//Using dot notation
console.log(jonasObject.lastName);

//Using bracket notation
console.log(jonasObject['lastName']);

//E.g.
console.log(`trying by concatenation:`);
const nameKey = 'Name';
console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Abhi? Choose between firstName, lastName, age, job, friends');
// console.log(interestedIn);
// console.log(jonasObject[interestedIn]);

if (jonasObject[interestedIn]) {
    console.log(jonasObject[interestedIn]);
}
else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, friends`);
}

jonasObject.location = 'Delhi';
jonasObject['instagram'] = '@the.bearded.guy';
console.log(jonasObject);

//challenge
const finalString = `${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}`;
console.log(finalString);

//Exercise
const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi',
    population: 100,
    neighbours: ['Haryana', 'Uttar Pradesh', 'Punjab']
};
const countryString = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`;
console.log(countryString);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

