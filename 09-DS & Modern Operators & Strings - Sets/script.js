'use strict';

//can hold mix data types as well
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
//Set(3) {'Pasta', 'Pizza', 'Risotto'}
//all duplicates gone!

console.log(new Set('Jonas'));
console.log(orderSet.size); //how many unique diff meals will be cooked

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);

// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; //new array using spread operator
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('abhishekarora').size);
