'use strict';

// var firstName = 'matila'; //Don't use var, only let & const
const jonas = {
  firstName: 'Abhishek',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const self = this; //self or that..
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);

      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();

    //Solution2
    //Use arrow function if you need to use this keyword inside
    const isMillenial123 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial123();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); //we get Hey undefined, arrow function, doesn't have this keyword, it refers to the parent!
jonas.calcAge(); //But, this will perfectly work!

console.log(this.firstName); //output is undefined!

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); //arguments exist in normal fn.

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5); //arguments doesn't exist in arrow fn.
