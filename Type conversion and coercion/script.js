//type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // Output would be NaN ( Not a number means invalid number)
console.log(typeof NaN); // type would be number.

console.log(String(23));


//type coercion

console.log('I am ' + 23 + ' years old.'); //converted number to string.

//template literal converts from number to string itself.
const number1 = 23;
console.log(typeof '${number1}');

console.log('23' - '10' - 3); // minus sign triggers subtraction
console.log('23' * '2'); // multiply sign triggers multiplication
console.log('23' / '2'); // divide sign triggers division

console.log('13' + '2'); // ONLY ADDITION SIGN DOES NOT TRIGGER ADDITION.
// IT CONCATENATES THEM AS STRING
console.log('**********************************')
//Exercise
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57); // returns false
console.log(5 + 6 + '4' + 9 - 4 - 2); //important


