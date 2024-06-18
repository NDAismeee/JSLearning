/*
The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array
*/

const name = ["nda","thanh","linh","lien","nam", "khanh", "mai"]

function check1(str){
    return str.length >=3;
}
function check2(str){
    return str.length >4;
}

console.log(name.every(check1));
console.log(name.every(check2));