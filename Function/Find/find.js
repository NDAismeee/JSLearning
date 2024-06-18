/*
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.
*/

const name = ["nda","thanh","linh","lien","nam", "khanh", "mai"]

function findThanh(str){
    return str == "thanh";
}
function findMai(str){
    return str == "mai";
}

const Thanh = name.find(findThanh);
const Mai = name.find(findMai);
console.log(Thanh);
console.log(Mai);