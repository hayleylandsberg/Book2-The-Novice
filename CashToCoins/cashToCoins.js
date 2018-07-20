const dollarAmount = 24.97;
const piggyBank = {}

piggyBank.quarters = Math.floor(dollarAmount / .25);

let qRemainder = dollarAmount % .25;
piggyBank.dimes = Math.floor(qRemainder / .10);

let dRemainder = qRemainder % .10;
piggyBank.nickels = Math.floor(dRemainder / .05);

let nRemainder = dRemainder % .05;
piggyBank.pennies = Math.ceil(nRemainder / .01);

console.log(piggyBank);