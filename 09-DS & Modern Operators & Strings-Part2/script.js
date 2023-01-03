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
//bad approach
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//using spread operator
//whenever we write multiple values
//separated by comma
const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray);

//logging the individual elements of the array
console.log(...goodNewArray);
// same as console.log(1, 2, 7, 8, 9);

//adding our values at the last using spread operator
const newMenu = [...restaurant.mainMenu, 'Broccli'];
console.log(newMenu);
//It also helps us take us out values from arrays.

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays or more --> using the spread operator.
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

//Iterables are arrays, strings, maps and sets,
//but NOT Objects!

//Using spread operator for String type!
//It works.
const str = 'Jonas';
const letters = [...str, '', 's'];
console.log(letters);
//O/p: (7) ['J', 'o', 'n', 'a', 's', '', 's']

console.log(...str);
//Multiple values separated by comma, will be the O/P,
// J o n a s --> same as 'J', 'o', 'n', 'a', 's'

//Real world examples
// const ingredients = [
//   prompt("Let's make pasta! Ingredient1?"),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];
// console.log(ingredients);

//Calling with spread operator!
// restaurant.orderPasta(...ingredients);

//Commenting the above exmaple, will uncomment later

// Objects - We can also use spread opeartor
const newRestaurant = {
  ...restaurant,
  founder: 'Abhishek',
  country: 'India',
  foundedIn: 1988,
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Sagar Ratna';
console.log(restaurant.name, restaurantCopy.name);
// We did made a copy, and both names above are not the same! #Imp
