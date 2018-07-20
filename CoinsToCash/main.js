const piggyBank = { pennies: 342, nickels: 32, dimes: 12, quarters: 75 }
let dollarAmount = 0

let totalPennies = piggyBank.pennies / 100;
let totalNickels = piggyBank.nickels / 20;
let totalDimes = piggyBank.dimes / 10;
let totalQuarters = piggyBank.quarters / 4;

dollarAmount = totalPennies + totalNickels + totalDimes + totalQuarters;
console.log(dollarAmount);
