// The keyword async before a function makes the function return a promise

const name = ["nda", "thanh", "linh", "lien", "nam", "khanh", "mai"]

function check(str) {
    return str.length > 3;
}

async function checkName1() {
    return check();
}

// checkName1()
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.log("Error: ", error);
//     });

async function test(checkName) {
    try {
        let data = await checkName();
        console.log('data:', data);
    } catch (err) {
        console.log('err:', err);
    }
}

async function checkName2() {
    return name.filter(check);
}

// checkName2()
//     .then(function (result) {
//         console.log(result);
//     });

// async function test2() {
//     try {
//         let data = await checkName2();
//         console.log('result: ', data);
//     } catch (error) {
//         console.log('error: ', error);
//     }
// }


//use loop for shorter code :))))
const checkName = [checkName1, checkName2];

for (var i = 0; i < checkName.length; i++) {
    test(checkName[i]);
}