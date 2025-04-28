const fibonacci = function(number) {
    let n1=0,n2=1,next=0;

    if (number < 0) {
        return ("OOPS");
    }
    else if (number==1){
        return 1;
    }

    else if (number==0){
        return 0; 
    }
    else if (number > 1) {
        for (let i = 1; i < number; i++) {
            next = n1 + n2;
            n1 = n2;
            n2 = next;
        }
        return next;
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
