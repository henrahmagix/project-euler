/*
  Let d(n) be defined as the sum of proper divisors of n (numbers less than n
  which divide evenly into n).
  
  If d(a) = b and d(b) = a, where a  b, then a and b are an amicable pair and
  each of a and b are called amicable numbers.
  
  For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55
  and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and
  142; so d(284) = 220.
  
  Evaluate the sum of all the amicable numbers under 10000.
*/
function getProperDivisors(n) {
  var i, divisors = [1], nRoot = Math.sqrt(n);
  
  // Find all divisors and their pairs up to the square root of n.
  for (i = 2; i < nRoot; i++) {
    if (n % i === 0) {
	  divisors.push(i, (n / i));
    }
  }
  
  // If n is a square number, add that divisor just once. It is not included in the
  // loop above, since the loop will exit upon i being equal to or greater than nRoot.
  if (i === nRoot) {
    divisors.push(i);
  }
  
  return divisors;
}
function sumOfProperDivisors(n) {
  var i, sum = 0, divisors = getProperDivisors(n);
  
  // Add each divisor to sum.
  for (i = 0; i < divisors.length; i++) {
    sum += divisors[i];
  }
  
  return sum;
}
function findAmicableNumbers(max) {
  var i, a, b, d = sumOfProperDivisors, amicableNumbers = [ ];
  
  // Find all amicable numbers up to, but not including, max.
  for (i = 2; i < max; i++) {
    if (amicableNumbers.indexOf(i) !== -1) continue; // This number has already been found.
    
    a = i;
    b = d(a); // Get d(a).
    if (b === a) continue; // a must not equal b.
    if (a === d(b)) amicableNumbers.push(a, b);
  }
  
  return amicableNumbers;
}
function sumOfAmicableNumbers(max) {
  var i, sum = 0, amicableNumbers = findAmicableNumbers(max);
  
  for (i = 0; i < amicableNumbers.length; i++) {
    sum += amicableNumbers[i];
  }
  
  return sum;
}
console.log(sumOfAmicableNumbers(10000));