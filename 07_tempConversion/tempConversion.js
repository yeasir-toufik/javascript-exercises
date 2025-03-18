const convertToCelsius = function(farenhite) {

  let celsius= (farenhite-32)*(5/9);
  let result=Math.round(celsius*10)/10;
  return result;

};

const convertToFahrenheit = function(celsius) {

    let farenhite= celsius*(9/5)+32;
    let result=Math.round(farenhite*10)/10;
    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
