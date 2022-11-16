'use strict';

const maxTemperatures1 = [17, 21, 23];
const maxTemperatures2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + '°C in ' + (i + 1) + ' days...');
  }
}
printForecast(maxTemperatures1);
console.log(`***Break in between***`);
printForecast(maxTemperatures2);
