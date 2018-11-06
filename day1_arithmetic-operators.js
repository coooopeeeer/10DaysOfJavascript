/*
    Day1: Arithmetic Operators

    Complete the following functions in the editor below:

    1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
    
    2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.

    The values returned by these functions are printed to stdout by locked stub code in the editor.
*/

'use strict';

function getArea(length, width) {
    let area;
    // Write your code here to calculate the area of a rectangle.
    area = length * width;
    console.log(area);
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here to calculate the perimeter of a rectangle.
    perimeter = 2 * (length + width);
    console.log(perimeter);
}

getArea(3, 4.5);
getPerimeter(3, 4.5);