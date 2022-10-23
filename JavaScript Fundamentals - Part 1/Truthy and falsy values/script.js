// 5 falsy values in js
// 0, '', undefined, null, NaN and also --> false

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;
if (money) {
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job"); //this will run
}

let height;
if (height) {
    console.log("Defined");
}
else {
    console.log("Undefined"); //this will run
}