// DATA TYPES IN JAVASCRIPT ->

// 1.Number
let age = 23;

// 2.String
let firstName = 'Abhishek';

// 3.Boolean
let isIndian = true;

// 4.Undefined -> Value taken by variable that is not defined. --> empty variable
let children;

// 5.Null
//Null also means empty value
null;

// 6.Symbol
//(ES2015) -> Value that is unique and cannot be changed. (Not useful for now.)

// 7.BigInt
//(ES2020) -> Larger Integers than the Number type can hold.

//How to add a Multi-line comment ->
/*
A "Hello, World!" program is generally a computer program that ignores 
any input and outputs or displays a message similar to "Hello, World!". 
A small piece of code in most general-purpose programming languages, 
this program is used to illustrate a language's basic syntax.
*/

//Variable holding boolean value
//value holding data type, not value!

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//typeof
console.log(typeof javaScriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof 'Abhishek'); //string
console.log("****************************************");
//re-assigning value of the variable
javaScriptIsFun = 'YES!';
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log("****************************************");
//undefined variable - empty value
let year; //declaring an empty variable
console.log(year);
console.log(typeof year);
console.log("****************************************");
//re-assigning value of the variable
year = 1991;
console.log(year);
console.log(typeof year);
console.log("****************************************");
//null data type
console.log(null)
console.log(typeof null); // typeof null is coming out as object, which is not true, it should be null only, just like in-case of undefined. But it's not changed due to legacy reasons.
console.log("****************************************");

//Exercise
let isIsland = false;
let language;
let populationIn2022 = 16356020515381635602051538n; //Adding n to the end of the number makes it bigint data type.
let country = 'India';
console.log("Printing data types:")
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof populationIn2022);
console.log(typeof country);