const leapYears = function( userInput) {

if( userInput%100==0){
    if( userInput%400==0){

        return true;

    }

    else{
        return false;
    }

}
else if(userInput%4==0){
    return true;
}

else { return false;}


};

// Do not edit below this line
module.exports = leapYears;
