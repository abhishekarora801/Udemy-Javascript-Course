'use strict';

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];
const calcTip = billValue => {
    let tip;
    if (billValue >= 50 && billValue <= 300) {
        tip = .15 * billValue;
    }
    else {
        tip = .20 * billValue;
    }
    return tip;
}
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + calcTip(bills[i]);
}
console.log(tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));