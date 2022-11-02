'use strict';

const jonas = {
    firstName: 'Abhishek',
    lastName: 'Arora',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriverLicense ? 'has a' : 'doesnt have a'} driver's license.`;
    }
};

console.log(jonas.getSummary());

//Exercise:
const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi',
    population: '1000',
    neighbours: ['Haryana', 'Uttar Pradesh', 'Punjab'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
// console.log(myCountry.isIsland);
console.log(myCountry);




