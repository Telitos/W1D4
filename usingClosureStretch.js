'use strict'

const wrapLog = function (callback, name) {

  return function (arg1, arg2) {
    console.log(name + "(" + arg1 + "," + arg2 + ")" + "=> " + callback(arg1, arg2))
  }
};

const sum = function (a,b) { return a + b; };
const logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
