'use strict';

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');
console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//Power of having booleans for specific time, to check if open or close
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); //has method
rest.delete(2);
console.log(rest);

console.log(rest.size);
// rest.clear();
console.log(rest);

rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.get([1, 2])); //will written undefined

//to use this, create

const arr = [3, 4];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr));

//some more practice!
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
