function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

function factorialFactory(f) {
  return function factorial(x) {
    if (x === 0) {
      return 1;
    }
    return x * f(x - 1);
  };
}

const factorialUpTo0 = factorialFactory(Math.random);
const factorialUpTo1 = factorialFactory(factorialUpTo0);
const factorialUpTo2 = factorialFactory(factorialUpTo1);
const factorialUpTo3 = factorialFactory(factorialUpTo2);
const factorialUpTo4 = factorialFactory(factorialUpTo3);
const factorialUpTo5 = factorialFactory(factorialUpTo4);
const factorialUpTo6 = factorialFactory(factorialUpTo5);
const factorialUpTo7 = factorialFactory(factorialUpTo6);
const factorialUpTo8 = factorialFactory(factorialUpTo7);
const factorialUpTo9 = factorialFactory(factorialUpTo8);
const factorialUpTo10 = factorialFactory(factorialUpTo9);

function y(f) {
  return function thunk(x) {
    return f(y(f))(x)
  }
}

function x(otherX) {
  return function y(f) {
    return function thunk(n) {
      return f(otherX(otherX)(f))(n);
    }
  }
}

const newY = x(x);

const newestY =
  ((x) => (f) => (...a) => f(x(x)(f))(...a))
    ((x) => (f) => (...a) => f(x(x)(f))(...a));

function fibonacciFactory(f) {
  return function thunk(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return f(n - 2) + f(n - 1);
  }
}

module.exports = {
  factorial,
  factorialFactory,
  factorialUpTo0,
  factorialUpTo10,
  y,
  newY,
  newestY,
  fibonacciFactory,
};