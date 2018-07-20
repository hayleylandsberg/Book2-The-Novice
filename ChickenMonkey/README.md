Practice: ChickenMonkey
Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

To determine if a number can be evenly divided by 3 or 5, use the JavaScript remainder operator.

For example...

// Only show even numbers
const numbers = [1,2,3,4,5,6,7]

for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]

    // Take the current number, divide by 2, and check if the remainder is 0
    if (currentNumber % 2 === 0) {
        console.log(currentNumber) // Only 2, 4, 6 will appear
    }
}