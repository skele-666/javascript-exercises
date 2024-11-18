const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, num) => acc * num);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	// I didn't get this lol
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
