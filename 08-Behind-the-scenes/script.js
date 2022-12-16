'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating new variables with same name as outer scope
      const firstName = 'Steven';
      output = `New output!`;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); //declared with var, can be accessed, outside if block!
  }
  printAge();

  return age;
}

const firstName = 'Abhishek';

calcAge(1991);

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Abhishek';
let job = 'teacher';
const year = 1991;

//Calling functions before defined
console.log(addDec(2, 3)); //Works fine!
// console.log(addExpr(2, 3)); //Uncaught TypeError: addExpr is not a function

//Functions
function addDec(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}
//Conclusion =>
//Hoisting works with var variables.
//So even after telling it to only execute on 0 value,
//it will still execute.

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//Understanding the 'this' keyword

const jonas = {
  newName: 'Abhi',
  newYear: '1989',
  calcAge1: function () {
    return 2037 - this.newYear;
  },
};
console.log(jonas.calcAge1());
console.log(jonas.newName);

//this keyword practice
console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge2(1991);

const calcAge2Arrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //this keyword is window object in arrow function! => Lexical this keyword, that means using from parent scope!
};

calcAge2Arrow(1980);

const abhishek = {
  bYear: 1991,
  calcAge5: function () {
    console.log(this); //this keyword will be the abhishek object
  },
};
abhishek.calcAge5();

const matilda = {
  year2: 2017,
};

matilda.calcAge10 = jonas.calcAge1; //borrowed the function!
console.log(matilda);
matilda.calcAge10();

const f = jonas.calcAge1;
f(); // only work when 'use strict' was not set!
