/*Page 34, The Basic 13*/

// 1. Print 1-255

// Print all the integers from 1-255

function countto255() {
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}
countto255();

// --------------------------------------------------------

// 2. Print sum 0-255

// Print integers from 0 to 255, and with each integer print the sum so far.

function getSum() {
    var sum = 0;
    for (var i = 0; i < 256; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;
}
getSum();

// ---------------------------------------------------------


// 3. Find and Print Max

// Given an array, find and print its largest element

function findMax(arr) {
    var max = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([12, 14, 17, 22, 5, 2, 111]));

// --------------------------------------------------------

// 4. Array with Odds

// Create an array with all the odd integers between 1 and 255 (inclusive).

function gimmeTheOdds() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        if (i % 2 !== 0)
            arr.push(i);
    }
    return arr
}
console.log(gimmeTheOdds());


// --------------------------------------------------------

// 5. Greater than Y

// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}

console.log(greaterThanY([2, 5, 9, 12, 3, 16, 25, 92, 70], 24));

// --------------------------------------------------------

// 6. Min, Max, Average

// Given an array, print the max, min and average values for that array.
function findMinMaxAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    return [min, max, avg]
}


console.log(findMinMaxAvg([1, 2, 3, 4, 5]));

// --------------------------------------------------------

// 7. Swap String For Array Negative Values

// Replace any negative array values with 'Dojo'.
function noNegatives(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

console.log(noNegatives([-2, 3, 5, 6, -15]));

// --------------------------------------------------------

// 8. Print Odds 1-255

// Print all odd integers from 1 to 255.
function gimmeTheOdds(min, max) {
    for (var i = min; i <= max; i++) {
        if (i % 2 > 0) {
            console.log(i);
        }

    }
}
gimmeTheOdds(1, 255);


// --------------------------------------------------------

// 9. Iterate and Print Array

// Iterate through a given array, printing each value.
function iterate(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
}
iterate([7, 25, 'Hey', 34, 'Hello']);

// --------------------------------------------------------

// 10. Get and Print Average

// Analyze an array’s values and print the average.
function getAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(getAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// --------------------------------------------------------

// 11. Square the Values

// Square each value in a given array, returning that same array with changed values.
function squareVal(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return (arr)
}
console.log(squareVal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// --------------------------------------------------------

// 12. Zero Out Negative Numbers

// Return the given array, after setting any negative values to zero.
function noNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(noNegatives([-1, -2, 4, 5, 9, -3, 0]));

// --------------------------------------------------------

// 13. Shift Array Values

// NOT SURE WHAT TO DO

// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
// end.
function shiftArr(arr) {

}

console.log(shiftArr([1, 2, 3, 4, 5, 6, 7]));

// --------------------------------------------------------


// Page 38: Sigma

/*Implement a function sigma(num) that, given a
number, returns the sum of all positive integers
from 1 up to number (inclusive). Ex.: sigma(3)
= 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).*/

function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sigma(6));

// --------------------------------------------------------

// Page 38: Factorial

/*Write a function factorial(num) that, given a
number, returns the product (multiplication) of all
positive integers from 1 up to number (inclusive).
For example, factorial(3) = 6 (or 1 * 2 * 3);
factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).*/

function factorial(num) {
    var sum = 1;
    for (i = 1; i <= num; i++) {
        sum = sum * i;
    }
    return sum;
}

console.log(factorial(5));

//-------------------------------

// Page 39: Three and Fives

/*Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value
is evenly divisible by 3 or 5 but not both. Display the final sum in the console*/

function threeFives() {
    var sum = 0;
    for (var i = 100; i <= 4000000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(threeFives());

/*Second: Change your function to make a BetterThreesFives(start,end)where start and end
values are customizable. You can think of the above ThreesFives() function as
BetterThreesFives(100,4000000).*/


function betterThreeFives(start, end) {
    var sum = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(betterThreeFives(100, 4000000));


//----------------------------------------

// Page 40: Generate Coin Change

/*Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and
computes how to represent that amount with the smallest number of coins. Console.log the result.*/

function generateCoinChange(cents) {
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    if (cents / 25 > 0) {
        quarter = Math.floor(cents / 25);
        cents = cents - (quarter * 25);
    }
    if (cents / 10 > 0) {
        dime = Math.floor(cents / 10);
        cents = cents - (dime * 10);
    }
    if (cents / 5 > 0) {
        nickel = Math.floor(cents / 5);
        cents = cents - (nickel * 5);
    }

    penny = cents;

    console.log("quarters: " + quarter)
    console.log("dimes: " + dime)
    console.log("nickels: " + nickel)
    console.log("pennies: " + penny)
}
generateCoinChange(96);

// --------------------------------------------------------

// Page 41: Statistics to Doubles

/*Implement a ‘die’ that randomly returns an
integer between 1 and 6 inclusive. Roll a pair of
these dice, tracking the statistics until doubles
are rolled. Display the number of rolls, min, max,
and average. */

function rollDie() {
    var sum = 0;
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var diceSum = die1 + die2;
    var minVal = diceSum;
    var maxVal = diceSum;
    var numberOfRolls = 1;

    if (die1 == die2) {
        console.log("You got doubles on the initial roll. Congrats, no stats!");
        return;
    }

    while (die1 != die2) {
        diceSum = die1 + die2;
        numberOfRolls += 1;
        sum = sum + diceSum;
        if (minVal > diceSum) {
            minVal = diceSum;
        }
        if (maxVal < diceSum) {
            maxVal = diceSum;
        }
        die1 = Math.floor(Math.random() * 6) + 1;
        die2 = Math.floor(Math.random() * 6) + 1;
    }
    var avg = sum / numberOfRolls;
    console.log("number of rolls= " + numberOfRolls, "| min value= " + minVal, "| max value= " + maxVal, "| avg value= " + avg);
}

rollDie();



// --------------------------------------------------------

// Page 41: Sum To One Digit

/*Implement a function sumToOne(num) that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result. */

function sumToOne(num) {
    var sum = 0;
    while (num > 0 || sum > 9) {
        if (num == 0) {
            num = sum;
            sum = 0;
        }
        sum = sum + num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumToOne(12));

// --------------------------------------------------------

// Page 42: Fibonacci ([0, 1, 1, 2, 3, 5, 8, 13, 21, etc.])

/*Implement the Fibonacci function, a famous mathematical equation that generates a numerical
sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0
and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which
Fibonacci number. */

function fibonacci(num) {
    var arr= [0, 1];
    for(var i=2; i < num + 1; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[num];
}

console.log(fibonacci(6));

// --------------------------------------------------------

// Page 43: Last Digit of A to the B

/*Modern computers can handle very large numbers, but this ability has limits. If a number is repeatedly
multiplied by itself, it eventually exceeds the computer’s ability to accurately represent it. (Side note: the
number of times it is multiplied by itself is called the exponent.) 

For an optional end-of-chapter challenge, determine the smallest (least significant) digit of a number that is potentially very, very large.
You may find that you must do this without computing the actual (unimaginably large) number.

Implement a function that accepts two non-negative integers as arguments. Function lastDigitAtoB(a,
b) should return the last digit of the first number (a) raised to an exponent of the second number (b).
Examples: given (3, 4), you should return 1 (the last digit of 81: 3 * 3 * 3 * 3). Given (12, 5), return
2 (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12). */

//Below has issues and wouldn't be efficient.

function lastDigitAToB(a,b) {
    if(b=0) {
        return a % 10;
    }
    var result = a ** b;
    return result % 10;
}

console.log(lastDigitAToB(5,0));