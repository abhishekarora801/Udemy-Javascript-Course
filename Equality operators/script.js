const age = 18;

//comparison operator ( 3 equals )
// strict equality operator
if (age === 18) console.log(`You just became an adult`);

// loose equality operator
console.log('18' == 18); // returns true // coercion is done here.

const fav = prompt("What's your fav number?");
console.log(fav);
console.log(typeof fav);

if (fav == 12) { // '12' == 12
    console.log("Cool, 12 is an amazing number");
}

console.log(`**************************************`)
//convert string to number

const fav1 = Number(fav);
if (fav1 === 12) {
    console.log("12 a great number"); // 12 = 12
}
else if (fav1 === 8) {
    console.log(`8 a great number`);
}
else {
    console.log(`Nor 8 or 12`);
}

if (fav1 !== 12) console.log("not 12"); // not equal to

console.log(`---------------------------------------------------`)
//Exercise

const numNeighbours = Number(prompt('How many neighour countries does your country have?')); //this stores as string.

if (numNeighbours === 1) {
    console.log(`Only 1 border`);
}
else if (numNeighbours > 1) {
    console.log(`More than 1 border`);
}
else {
    console.log('No borders');
}
