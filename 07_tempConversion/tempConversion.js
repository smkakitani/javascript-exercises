const ftoc = function(x) {
  let celsius = (x - 32) * (5/9);
  let roundCelsius = Math.round(celsius * 10) / 10;
  return roundCelsius;
};

const ctof = function(y) {
  let fahrenheit = (y * (9/5) + 32);
  let roundFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
