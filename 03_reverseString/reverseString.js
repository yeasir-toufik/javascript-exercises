const reverseString = function ( userInput ) {

    
    let newString = "";
    for (let i = userInput.length - 1; i >= 0; i--) {
        newString = newString+ userInput[i];
    }
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
