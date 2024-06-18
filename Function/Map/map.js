/*
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.
*/

const name = ["nda","thanh","linh","lien"]
var mailAddress = "@smartosc.com"
const newName = name.map(emailName);

function emailName(str) {
    return str+mailAddress;
}

console.log(newName);

