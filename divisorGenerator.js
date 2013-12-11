/**
 * Return an array of the divisors of n, including n if proper is false.
 */
function divisorGenerator(n, proper) {
  var i = 0, j = 0, divisors = [1], nRoot = Math.sqrt(n);
  // Loop from 2 up to, and including, the square root of n.
  for (i = 2; i <= nRoot; i++) {
    if (n%i === 0) {
      divisors.push(i);
    }
  }
  
  // This second loop is to find the pairs of each divisor. Work backwards, to
  // keep readability of the array. We could also use Array.sort(), but why bother
  // when the direction in which we go through the array does not matter?
  // Firstly, save the length, since it will be increased.
  length = divisors.length;
  // If the proper divisors are not required, ignore the first element, 1, since
  // 1's pair is n. We do this by inverting proper, since false will be type coerced
  // to 0, thus including the first element. Likewise, if proper is true, proper
  // will become 1, which will exclude the first element, thus not including n in divisors.
  proper = !proper;
  for (j = (length - 1); j >= proper; j--) {
    if (divisors[j] !== nRoot) { // Ignore the square root of n.
      divisors.push(n / divisors[j]);
    }
  }
  
  return divisors;
}