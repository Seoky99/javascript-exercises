const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b; 
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item, 1);
};

const power = function(a, b) {
	return a ** b; 
};

const factorial = function(a) {
	if (a === 0) { return 1;}

  let total = 1;

  for (let iter = a; iter > 0; iter--) {
    total *= iter; 
  }

  return total;
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
