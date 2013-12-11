/*
  A perfect number is a number for which the sum of its proper divisors is exactly
  equal to the number. For example, the sum of the proper divisors of 28 would be
  1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
  
  A number n is called deficient if the sum of its proper divisors is less than n
  and it is called abundant if this sum exceeds n.
  
  As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
  number that can be written as the sum of two abundant numbers is 24. By mathematical
  analysis, it can be shown that all integers greater than 28123 can be written as
  the sum of two abundant numbers. However, this upper limit cannot be reduced any
  further by analysis even though it is known that the greatest number that cannot
  be expressed as the sum of two abundant numbers is less than this limit.
  
  Find the sum of all the positive integers which cannot be written as the sum of
  two abundant numbers.
  
  Actual limit is 20161, but using this limit produces an incorrect result of 4159710.
  The correct answer is 4179871;
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

function findAbundantNumbers(upperLimit) {
  var abundants = [], i;
  for (i = 1; i < upperLimit; i++) {
    if (i.isAbundant()) abundants.push(i);
  }
  return abundants;
}

function allSumsOfAbundantPairs(limit) {
  if (typeof limit === "undefined") {
    limit = 28123;
  }
  var i, j;
  var abundantNumbers = findAbundantNumbers(limit), abundantNumbersLength = abundantNumbers.length;
  var isSumOfAbundantPair = [];
  
  for (i = 0; i < abundantNumbersLength; i++) {
    for (j = 0; j < abundantNumbersLength; j++) {
      if (abundantNumbers[i] + abundantNumbers[j] <= limit) {
        isSumOfAbundantPair[abundantNumbers[i] + abundantNumbers[j]] = true;
      }
    }
  }
  
  return isSumOfAbundantPair;
}

function sumOfNonAbundantSums(limit) {
  var i, sum = 0, isSumOfAbundantPair = allSumsOfAbundantPairs(limit);
  
  for (i = 0; i < isSumOfAbundantPair.length; i++) {
    if (!isSumOfAbundantPair[i]) sum += i;
  }
  
  return sum;
}
/*
  // [24,30,32,36,38,40,42,44,48];
  var isNotSumOfAbundantPair =
  [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,
    31,33,34,35,37,39,41,43,45,46,47
  ];
  var sum = 0;
  for (i = 0; i < isNotSumOfAbundantPair.length; i++) {
    sum += isNotSumOfAbundantPair[i];
  }
  console.log(isNotSumOfAbundantPair);
  console.log(sum);
*/

/**
 * Add the above functions to the Number object.
 */
Number.prototype.sumOfProperDivisors = function() {
  return sumOfProperDivisors(this.valueOf());
}
Number.prototype.getNumberStatus = function() {
  return this.sumOfProperDivisors() / this.valueOf();
}
Number.prototype.isAbundant = function() {
  return (this.getNumberStatus() > 1) ? true : false;
}