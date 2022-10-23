const billValue = 430;

const tip = billValue >= 50 && billValue <= 300 ? .15 * billValue : .20 * billValue;

console.log(`The bill was ${billValue}, the tip was
${tip}, and the total value is ${billValue + tip}`);