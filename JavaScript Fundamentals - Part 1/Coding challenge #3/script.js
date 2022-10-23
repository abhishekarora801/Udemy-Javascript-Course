// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// console.log(averageScoreDolphins, averageScoreKoalas);

// if (averageScoreDolphins > averageScoreKoalas) {
//     console.log(`Team Dolphins Win!`);
// }
// else if (averageScoreKoalas > averageScoreDolphins) {
//     console.log(`Team Koalas Win!`);
// }
// else {
//     console.log(`Its a draw!`);
// }

//Minimum score condition
const averageScoreDolphins = (97 + 112 + 80) / 3;
const averageScoreKoalas = (109 + 95 + 50) / 3;
if (averageScoreDolphins > averageScoreKoalas &&
    averageScoreDolphins >= 100) {
    console.log(`Team Dolphins Win!`);
}
else if (averageScoreKoalas > averageScoreDolphins &&
    averageScoreKoalas >= 100) {
    console.log(`Team Koalas Win!`);
}
else if (averageScoreDolphins === averageScoreKoalas &&
    averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    console.log(`Both win!`);
}
else {
    console.log(`No one wins`);
}
