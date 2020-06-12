const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

const plus = calculator.plus(7, 3);
const minus = calculator.minus(7, 3);
const mul = calculator.mul(7, 3);
const divide = calculator.divide(7, 3);
console.log("plus", plus, minus, mul, divide);
