'use strict';

exports = module.exports = function convert(num) {
  var roman = '';
  var numerals = exports.numerals;
  for (var numeral in numerals) {
    if (numerals.hasOwnProperty(numeral)) {
      while (num >= numerals[numeral]) {
        roman += numeral.toUpperCase();
        num -= numerals[numeral];
      }
    }
  }
  return roman;
};

exports.numerals = {
  m: 1000,
  d: 500,
  c: 100,
  l: 50,
  x: 10,
  v: 5,
  i: 1
};