const add = function(x, y) {
  return x + y;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(array) {  
  return array.reduce((total, number) => total + number, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
  let result = 1;
	if (n === 0) {
    return 1;
  }
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
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
