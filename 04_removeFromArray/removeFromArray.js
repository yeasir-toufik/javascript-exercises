const removeFromArray = function( userArray, ...removeItem ) {

   

    return userArray.filter(x => !removeItem.includes(x));

};




// Do not edit below this line
module.exports = removeFromArray;
