'use strict';

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

//creating an array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//creating array using new keyword, as a function
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

//printing first element out
console.log(friends[0]);


//and
console.log(friends[2]);

//getting number of elements in array.
console.log(friends.length);

//printing last element of array
console.log(friends[friends.length - 1]);

//changing array element
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Abhi';
const abhi = [firstName, 'Arora', 2037 - 1995, 'teacher', friends];
console.log(abhi);
console.log(abhi.length);


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = new Array(1990, 1967, 2002, 2010, 2018);
const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);


//Exercise
console.log(`Exercise:`);
const populations = new Array(100, 200, 300, 400);
console.log(populations);

if (populations.length === 4) {
    console.log(true);
}
else {
    console.log(false);
}

function percentageOfWorld(population) {
    return (population / 2000) * 100;
}

const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(percentages);







