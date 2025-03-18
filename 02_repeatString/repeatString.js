const repeatString = function(repeatThis, numberOfRepeat ) {

        let result="";

        if(numberOfRepeat <0){

            return result="ERROR";
        }
        else {

        
        for(let i=0; i< numberOfRepeat; i++){
            
            result= result+repeatThis;
            }
        return result;
    }
};
 

// Do not edit below this line
module.exports = repeatString;
