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
