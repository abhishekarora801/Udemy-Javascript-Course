//IMPORTANT - Ternary operator
const age = 23;

// STRUCTURE
// condition ? Execute this if condition is true : Else execute this
//condition ? if part : else part
// expression, that always produces a value.
// it always produces a value.
// we can store values.

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//Showing how to do by if-else.
// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// }
// else {
//     drink2 = 'water';
// }
// console.log(drink2);

//WE CAN USE TERNARY OPERATOR INSIDE TEMPLATE LITERAL
//VERY VERY IMP
//BECAUSE IT IS AN EXPRESSION.
//AND WE CAN USE EXPRESSION INSIDE TEMPLATE LITERAL
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//Exercise

const population = 113;

population > 33 ? 'above' : 'below';
console.log(`Portugal population is ${population > 33 ? 'above' : 'below'} average`);





