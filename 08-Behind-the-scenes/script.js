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
