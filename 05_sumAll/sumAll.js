const sumAll = function( num1, num2) {

    let sumOfAllInteger=0;

    if( ((num1 || num2)>=0) && (Number.isInteger(num1) && Number.isInteger(num2)) ) {

        if (num1 < num2) {

            for (let i = num1; i <= num2; i++) {

                sumOfAllInteger = sumOfAllInteger + i;

            }

            return sumOfAllInteger;
        }

        else if(num1>num2){

            for (let i = num2; i <= num1; i++) {

                sumOfAllInteger = sumOfAllInteger + i;

            }

            return sumOfAllInteger;

        }
        else{ return num1;}

    }

    else{
        return "ERROR";
    }

    

};

// Do not edit below this line
module.exports = sumAll;
