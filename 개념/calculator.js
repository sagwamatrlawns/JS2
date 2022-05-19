const calculator = {
  plus: function (a, b) {
    return a + b;
  },

  minus: function (a, b) {
    return a - b;
  },

  multi: function (a, b) {
    return a * b;
  },

  div: function (a, b) {
    return a / b;
  },

  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
