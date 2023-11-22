/*Page 34, The Basic 13*/

// 1. Print 1-255

// Print all the integers from 1-255

function countto255() {
    for(var i= 1; i<256; i++) {
        console.log(i);
    }
}
countto255();

// --------------------------------------------------------

// 2. Print sum 0-255

// Print integers from 0 to 255, and with each integer print the sum so far.

function getSum() {
    var sum= 0;
    for(var i=0; i<256; i++) {
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
    var max= arr[0]
    for (var i= 0; i<arr.length; i++) {
        if(max < arr[i]) {
            max= arr[i];
        }
    }
    return max;
}

console.log(findMax([12, 14, 17, 22, 5, 2, 111]));

// --------------------------------------------------------

// 4. Array with Odds

// Create an array with all the odd integers between 1 and 255 (inclusive).

function gimmeTheOdds () {
    var arr = [];
    for(var i=1; i<256; i++) {
        if(i % 2 !== 0)
        arr.push(i);
    }
    return arr
}
console.log(gimmeTheOdds());


// --------------------------------------------------------

// 5. Greater than Y

// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, Y) {
    var count= 0;
    for(var i=0; i < arr.length; i++) {
        if(arr[i] > Y) {
            count++;
        }
    }
    return count;
}

console.log(greaterThanY([2,5,9,12,3,16,25,92,70], 24));

// --------------------------------------------------------

// 6. Min, Max, Average

// Given an array, print the max, min and average values for that array.
function findMinMaxAvg(arr) {
    var min= arr[0];
    var max= arr[0];
    var sum= arr[0];
    for(var i= 1; i < arr.length; i++) {
        if (arr[i] < min){
            min= arr[i];
        }
        if(arr[i] > max) {
            max= arr[i];
        }
        sum = sum + arr[i];
    }
    var avg= sum/arr.length;
    return [min, max, avg]
}


console.log(findMinMaxAvg([1,2,3,4,5]));

// --------------------------------------------------------

// 7. Swap String For Array Negative Values

// Replace any negative array values with 'Dojo'.
function noNegatives(arr) {
    for(i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

console.log(noNegatives([-2,3,5,6,-15]));

// --------------------------------------------------------

// 8. Print Odds 1-255

// Print all odd integers from 1 to 255.
function gimmeTheOdds (min,max) {
    for(var i = min; i <= max; i++) {
        if(i % 2 > 0) {
            console.log(i);
        }
        
    }
}
gimmeTheOdds(1,255);


// --------------------------------------------------------

// 9. Iterate and Print Array

// Iterate through a given array, printing each value.
function iterate (arr) {
    for(var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        
    }
}
iterate([7,25,'Hey',34,'Hello']);

// --------------------------------------------------------

// 10. Get and Print Average

// Analyze an array’s values and print the average.
function getAvg(arr) {
    var sum= 0; 
    for(var i=0; i<arr.length; i++) {  
        sum += arr[i];
    }
    return sum / arr.length;  
}
console.log(getAvg([1,2,3,4,5,6,7,8,9,10]));

// --------------------------------------------------------

// 11. Square the Values

// Square each value in a given array, returning that same array with changed values.
function squareVal(arr) {
    for(i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return(arr)
}
console.log(squareVal([1,2,3,4,5,6,7,8,9,10]));

// --------------------------------------------------------

// 12. Zero Out Negative Numbers

// Return the given array, after setting any negative values to zero.
function noNegatives(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
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

console.log(shiftArr([1,2,3,4,5,6,7]));

// --------------------------------------------------------

var sum = 1;
function factorial(num) {
    for (i = 1; i <= num; i++) {
        sum = sum * i
        console.log(sum)
    }
}

factorial(5);

//-------------------------------

function threeFives() {
    var sum = 0;
    for (i = 1; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
            console.log(sum);
        }
    }
}
threeFives();

//----------------------------------------
function generateCoinChange (cents) {
    var quarter= 0;
    var dime= 0;
    var nickel= 0;
    var penny= 0;
    if(cents / 25 > 0) {
        quarter= Math.floor(cents/25);
        cents = cents - (quarter*25);
    }
    if(cents / 10 > 0) {
        dime= Math.floor(cents/10);
        cents= cents - (dime*10);
    }
    if (cents / 5 > 0) {
        nickel= Math.floor(cents/5);
        cents = cents -(nickel*5);
    }

        penny = cents;

console.log("quarters: " + quarter)
console.log("dimes: " + dime)
console.log("nickels: " + nickel)
console.log("pennies: " + penny)
}
generateCoinChange(96);
