const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (hasDriverLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive`);
// }
// else {
//     console.log(`Someone else should drive...`);
// }

const isTired = false; //C

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
}
else {
    console.log(`Someone else should drive...`);
}

//Exercise

const countrySpeakingLanguage = `English`;
const population = 10000000;
const isIsland = false;

if (countrySpeakingLanguage === 'English' &&
    population < 50000000 && !isIsland) {
    console.log(`This country is right!`);
}
else {
    console.log(`Not right country`);
}











