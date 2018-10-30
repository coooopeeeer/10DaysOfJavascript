/*
    Day0: Data Types

    Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below.
    You must use the + operator to perform the following sequence of operations:

    1. Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
    
    2. Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.

    3. Print the concatenation of firstString and secondString on a new line using console.log.
       Note that firstString must be printed first.
*/

'use strict';

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    console.log(Number(firstInteger) + Number(secondInteger));
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    console.log(parseFloat(firstDecimal) + parseFloat(secondDecimal));
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line.
    // The variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}
performOperation(12, 4.32, 'is the best place to learn and practice coding!');