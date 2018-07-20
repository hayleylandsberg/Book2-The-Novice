Cash to Coins
mkdir -p ~/workspace/javascript/exercises/cash-to-coins && cd $_
echo '<html>
  <body>
    <script src="./cashToCoins.js"></script>
  </body>
</html>' > index.html
touch cashToCoins.js
code .
Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.

const dollarAmount = 0.10
const piggyBank = {}

// Your magic code here

console.log(piggyBank)
That should produce the following output.

{
  quarters: 0,
  dimes: 1,
  nickels: 0,
  pennies: 0
}