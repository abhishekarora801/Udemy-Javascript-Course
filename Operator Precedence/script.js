// //Math operators
// const now = 2022;
// const ageAbhishek = now - 1996;
// console.log(ageAbhishek);

// const ageSarah = now - 2000;
// console.log(ageAbhishek, ageSarah); //Adding multiple values in console.log


// console.log(ageAbhishek * 2, ageAbhishek / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 --> 2*2*2 = 8

// const firstName = 'Jonas';
// const lastName = 'Smith';
// console.log(firstName + " " + lastName);

// //Assignment operator
// let x = 10 + 5;
// x += 10; // means x = x + 10, i.e. x = 15 +10 = 25;
// x *= 4; // x = x * 4;
// x++; // x = x + 1;
// x--; // x = x - 1;
// console.log(x);

// //Comparison operators
// console.log(ageAbhishek > ageSarah);
// console.log(ageAbhishek < ageSarah);
// console.log(ageAbhishek >= ageSarah);
// console.log(ageAbhishek <= ageSarah);

// const ageTrueOrFalse = ageSarah >= 22;
// console.log("Is Sarah age greater than equal to 22 -> ", ageTrueOrFalse);

// console.log(now - 1991 > now - 2018);
// console.log("-------------------------------------------------------------------")

// //Exercise
// let populationOfIndia = 1370000000;
// let halfPopulationOfIndia = populationOfIndia / 2;
// console.log("Population of India divided by 2 is: ", halfPopulationOfIndia);

// populationOfIndia++;
// console.log(populationOfIndia);

// let populationOfFinland = 6000000;
// let populationComparison = populationOfIndia > populationOfFinland;
// console.log("Population of India is greater than Finland: ", populationComparison);

// let averagePopulation = 33000000;
// let checkIfMyCountryPopulation = populationOfIndia < averagePopulation;
// console.log(checkIfMyCountryPopulation);

// let country = 'India';
// let continent = 'Asia';
// let population = '138 crores';
// let language = 'Hindi';
// const description = country + " is in " + continent + " and its " + population + " people speak " + language;
// console.log(description);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;  // x = y = 10; right-to-left
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

