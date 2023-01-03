'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered
    to ${address} at ${time}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const [x, y, z] = arr; //V.IMPORTANT, called Destructuring!
console.log(x, y, z);
//Also, original array not destroyed

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Using fucntion used above
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; //Nested Destructuring!
console.log(i, j, k);

//Setting default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //getting r=1 as the default value!

console.log('********************************************');
//Destructure Objects

//fetching values from restaurant object above!
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//giving new varibale names to them!
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//giving default value to variables.
//if it doesn't exist, that value will be assigned.
//if it exist, original value will be assigned.
// we use : for assigning a new name,
// and = for setting a default value.
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// O/p: [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// without paranthesis, it gives error,
//as we are assigning object,
//so we have to wrap them in paranthesis.
console.log(a, b);

//Nested objects --> changing to new name as well!
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//calling object in the fucntion above
//passing an object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
//Calling function to understand with default values given in function above
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
//these names should match, what we are specifying in function
