//Exercise
const country = 'India';
const populationOfIndia = 100;
const averagePopulation = 33;

if (populationOfIndia > averagePopulation) {
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country}'s population is ${averagePopulation - populationOfIndia} million below average.`);
}