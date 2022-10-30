'use strict';

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

console.log(calcTip(100));

const bills = new Array(125, 555, 44);
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);