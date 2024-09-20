const convertToCelsius = function(initialC) {

  converted = (initialC * 9/5 + 32);
  return Number(converted.toFixed(1));

};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
