const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((acc,curr)=>acc+curr,0);
};

const multiply = function(arr) {
  return arr.reduce((acc,curr)=>acc*curr);
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(num) {
	if (num==0){
    return 1;
  }
  else if (num !=0){
    let result=1;
    for (let i=num; i>=1;i--){
      result= result*i;     
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
