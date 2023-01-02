'use strict';

let age = 30;
let oldAge = age;

//age changed on birthday
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('friend', friend);
console.log('Me', me);
// O/p --> We got both ages as 27 yrs!
//But why ????
// because it points to the same address!! --> V.IMP <--

console.log(`******************************************`);

//Primitive types
let lastName = 'Arora';
let oldLastName = lastName;
lastName = 'Kapoor';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
//Both values above are same!

// marriedJessica = {}; // gives error, cannot change value of const.

//Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage', jessicaCopy); //Real copy of original! --> New object created in heap.
//Object.assign() will create a shallow copy
//lastName is changed, but array inside the object value
//gets changed.
//That's why called a shallow copy by using
//Object.assign() --> V.IMP
// This is called shallow cloning
