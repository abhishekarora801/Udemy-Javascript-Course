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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with
    ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

console.log(`***** OR *****`);
//Logical operators can use any data type
//can return any data type
//Short-circuiting or short-circuit evaluation
//If first value is truthy value, will return the same.
//That's why output is 3
console.log(3 || 'Jonas');
//Output is 3 <--

console.log('' || 'jonas12');
//O/P -> jonas12
console.log(true || 0);
//O/P -> true
console.log(undefined || null);
//O/P -> null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//O/P -> Hello, as it is the first truthy value.

//Using normal ternary operator
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//Using short-circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
//WILL NOT WORK WHEN NO. OF GUESTS IS 0 <--

console.log(`***** AND *****`);
//Short circuit when first value is Falsy and return
//the first value immediately, without checking the second
console.log(0 && 'Jonas');

//When First value is Truthy, goes to second value and returns it.
console.log(7 && 'Abhi');
//Output -> Abhi

console.log('Hello' && 23 && null && 'Jonas123');
//finds first falsy value and returns null,
//evaluation no longer continues

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'spinach');
}
//O/P -> Mushrooms
//O/P -> ['spinach']

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');
// Will call the function because first value is
//Truthy, so goes to second value and call the function.
