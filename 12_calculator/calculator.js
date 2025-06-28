const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(l) {
	let summ = 0;
  for (let i = 0; i<l.length; i++){
    summ += l[i]; 
  }
  return summ
};

const multiply = function(l) {
  let r = 1;
  for(let i = 0; i < l.length; i++){
    r*=l[i];
  }
  return r;
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	let f = 1
  for (let i = 1; i <= n; i++){
    f *= i;
  }
  return f;
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
