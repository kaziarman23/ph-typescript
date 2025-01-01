"use strict";
{
    // Task One
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    const sumArray = (...params) => {
        const array = params;
        let sum = 0;
        array.map((index) => {
            sum += index;
        });
        console.log(sum);
        return sum;
    };
    sumArray(3, 1, 5, 5);
    // Scope End
}
