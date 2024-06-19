/*
A JavaScript Promise object can be:

    Pending    -> the result is undefined
    Fulfilled  -> the result is a value
    Rejected   -> the result is an error object
*/


const name = ["nda", "thanh", "linh", "lien", "nam", "khanh", "mai"];

function findThanh(str) {
    return str == "thanh";
}

var promise = new Promise(function (resolve, reject) {
    resolve(name.find(findThanh));
    reject("Error!");
});

promise
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.log(error);
    });
    