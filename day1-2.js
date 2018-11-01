/*
    Day1: Functions

    Implement a function named factorial that has one parameter: an integer, n.
    It must return the value of n! (i.e., n factorial).
*/

'use strict';

function factorial(n) {
    let num = 1;
    for (let i = n; i > 0; i--) {
        num *= i;
    }
    console.log(num);
}
factorial(4);