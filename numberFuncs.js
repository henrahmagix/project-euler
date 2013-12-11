/**
 * Return the fibonacci sequence up to max. Optionally filter via a callback function
 * that returns true or false for each number.
 */
function fibonacciSequenceUpTo(max, func) {
  var runFunc = (typeof func !== "undefined")
  var x = save = 0, y = 1, nums = [];
  while (y <= max) {
    if (runFunc) {
      if (func(y)) {
        nums.push(y);
      }
    }
    else {
      nums.push(y);
    }
    save = y; // Save y...
    y += x; // ...get the next number...
    x = save; // ...finally set x to y's original value.
  }
  return nums;
}
Number.prototype.isOdd = function() {
  // Use a ternary operator, since (this&1) doesn't cast to a boolean. Also,
  // this is more verbose when comparing against isEven().
  return (this&1) ? true : false;
}
Number.prototype.isEven = function() {
  return (this&1) ? false : true;
}