'use strict';

const friends = ['Michael', 'Steven', 'Peter'];

//adding to last
const newLength = friends.push('Jay'); //push is a method, technically a function
console.log(friends);
console.log(newLength); //push method returns new length of array

//adding to start
friends.unshift('John');
console.log(friends);


//removing elements:

//removing last element
const poppedElement = friends.pop(); //remove last element from the array
console.log(friends);
console.log(poppedElement); //pop() returns the popped element

//removing first element

friends.shift(); //removes first element
console.log(friends);

//tells position of element.
console.log(friends.indexOf('Steven')); //returns index of Steven

//tries to find index of an element which is not in array
console.log(friends.indexOf('Abhi')); //returns -1


console.log(friends.includes('Steven')); //returns true
console.log(friends.includes('Abhishek')); //returns false

if (friends.includes('Peter')) {
    console.log(`You have a frnd called steven`);
}

//Exercise
console.log(`Exercise:`)
const neighbours = new Array('Pakistan', 'China', 'Sri Lanka', 'Bangladesh', 'Nepal', 'Bhutan', 'Myanmar');
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central European country!`);
}

const indexOfCountry = neighbours.indexOf('Nepal');
neighbours[indexOfCountry] = 'Republic Of Nepal';

console.log(neighbours);






