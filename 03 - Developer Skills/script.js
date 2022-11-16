'use strict';

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1995));

// function reverseString(fullName) {
//   if (!fullName || fullName.length < 2 || typeof fullName !== 'string') {
//     return 'Not valid';
//   }

//   const revArray = [];
//   const length = fullName.length - 1;

//   for (let i = length; i >= 0; i--) {
//     revArray.push(fullName[i]);
//   }
//   return revArray.join('');
// }

// console.log(reverseString('Abhishek'));
// console.log(reverseString('a'));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//calc temp. amplitude
//calc diff. between max and min temp values

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) {
//       max = currentTemp;
//     }
//     if (currentTemp < min) {
//       min = currentTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// calcTempAmplitude([3, 7, 4, 23]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);
// console.log(calcTempAmplitude([1, 2, 3], [4, 5, 6]));

console.log('*****************************');
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  //   console.log(measurement);
  //   console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// console.log(measureKelvin());

//using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
