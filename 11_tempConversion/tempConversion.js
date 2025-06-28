const convertToCelsius = function(num) {
  let a = (num - 32) * 5/9;
  if (!(Number.isInteger(a))){
    return parseFloat(a.toFixed(1));}
  return a;
};

const convertToFahrenheit = function(num) {
  let a = (num * 9/5) + 32;
  if (!(Number.isInteger(a))){
    return parseFloat(a.toFixed(1));}
  return a;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
