const palindromes = function (data) {


    let str = data.split("");


    let str2 = str.filter(l => l.match(/[a-z|0-9]/i)).join("");
    str2 = str2.toLowerCase();

    let final = str2.split('').reverse().join('');

    if (str2 == final) {
        return true;
    }
    else {
        return false;
    }
};

let result= palindromes("racecar");


// Do not edit below this line
module.exports = palindromes;
