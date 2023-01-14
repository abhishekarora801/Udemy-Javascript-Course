'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// Data needed for first part of the section
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`day-${2 + 4}`]: {
    open: 0, //open 24 hrs
    close: 24,
  },
};

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
  //Introduced in ES6 for methods!
  orderPizza(mainIngredient, ...otherIngredients) {
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
  //ES6 enhanced object literals!
  hours,
};
console.log(`********************************`);
//opening Hours for monday:
if (restaurant.hours.mon) {
  console.log(restaurant.hours.mon);
}
//opening Hours for friday:
if (restaurant.hours && restaurant.hours.fri) {
  console.log(restaurant.hours.fri.open);
}

//WITHOUT OPTIONAL CHAINING
// console.log(restaurant.hours.mon.open);
//WITH OPTIONAL CHAINING - FOR MONDAY
console.log(restaurant.hours.mon?.open);

//WITH OPTIONAL CHAINING - FOR HOURS AND MONDAY
console.log(restaurant.hours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  //using OPTIONAL CHAINING and nullish coalescing operator
  const open = restaurant.hours[day]?.open ?? 'closed';
  // console.log(open);

  console.log(`On ${day}, we open at ${open}`);
}

//Methods - OPTIONAL CHAINING - Check if method exist or not
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');

console.log(restaurant.order123?.(0, 1) ?? 'Method doesnt exist');

//Arrays - Using optional chaining - IMP and Easy
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

const users12 = [];
console.log(users12[0]?.name ?? 'User array empty');
