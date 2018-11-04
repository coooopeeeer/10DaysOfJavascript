/*
    Day2: Conditional Statements: If-Else

    Complete the getGrade(score) function in the editor.
    It has one parameter: an integer, score, denoting the number of points Julia earned on an exam.
    It must return the letter corresponding to her grade according to the following rules:

    ・If 25 < score <= 30, then grade = A.

    ・If 20 < score <= 25, then grade = B.

    ・If 15 < score <= 20, then grade = C.

    ・If 10 < score <= 15, then grade = D.

    ・If 5 < score <= 10, then grade = E.

    ・If 0 <= score <= 5, then grade = F.
*/

'use strict';

function getLetter(s) {
    let letter;
    // Write your code here
    let firstChar = s.charAt(0);
    switch (firstChar) {
        case "a" || "e" || "i" || "o" || "u" :
            letter = "A";
            break;

        case "b" || "c" || "d" || "f" || "g" :
            letter = "B";
            break;

        case "h" || "j" || "k" || "l" || "m" :
            letter = "C";
            break;

        case "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z" :
            letter = "D";
            break;
    }
    console.log(letter);
}
getLetter("adfgt");