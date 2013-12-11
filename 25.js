/*
  The Fibonacci sequence is defined by the recurrence relation:
  
  Fn = Fn1 + Fn2, where F1 = 1 and F2 = 1.
  Hence the first 12 terms will be:
  
  F1 = 1
  F2 = 1
  F3 = 2
  F4 = 3
  F5 = 5
  F6 = 8
  F7 = 13
  F8 = 21
  F9 = 34
  F10 = 55
  F11 = 89
  F12 = 144
  The 12th term, F12, is the first term to contain three digits.
  
  What is the first term in the Fibonacci sequence to contain 1000 digits?
  
  http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibFormula.html
  
*/
Number.prototype.getLength = function() {
  var numberString = this.toExponential().toString();
  var expo = numberString.slice(numberString.indexOf("+")+1);
  return parseInt(expo) + 1;
}
Math.Phi = (1 + Math.sqrt(5)) / 2;
Math.phi = (1 - Math.sqrt(5)) / 2;
function Fibonacci(n) {
	return (Math.pow(Math.Phi, n) - (-Math.pow(Math.phi, n))) / Math.sqrt(5);
}
function FibonacciSimple(n) {
	return Math.round(Math.pow(Math.Phi, n) / Math.sqrt(5));
}
function firstFibonacciTermWithNumberOfDigits(n) {
    var x=0, y=1, save, digits = 0;
    while (digits < n) {
        save = y; // Save y...
        y += x; // ...get the next number...
        x = save; // ...finally set x to y's original value.
        digits = y.toString().length;
    }
    return y;
    return y + x;
}