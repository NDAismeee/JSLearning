/*
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.
*/

const years = [2021, 2020, 1996, 1993, 2004];

function checkYear(num){
    return num>= 2000;
}

const genZ = years.filter(checkYear);
console.log(genZ);