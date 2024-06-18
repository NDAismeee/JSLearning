//The forEach() method calls a function for each element in an array.

//The forEach() method is not executed for empty elements.

const array1 = ['a', 'b', 'c'];
const copy = [];

array1.forEach((ele) => copy.push(ele));

console.log(copy);