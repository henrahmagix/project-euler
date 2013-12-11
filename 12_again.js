/**
 * Quicker
 */
function getNumberOfDivisors(n) {
  var divisors = [], numberOfDivisors = 0;
  nRoot = Math.sqrt(n);
  for (var i = 1; i < nRoot; i++) {
    if (n%i === 0) {
	  numberOfDivisors++;
    }
  }
  numberOfDivisors *= 2;
  if (nRoot*nRoot === n) {
    numberOfDivisors++;
  }
  return numberOfDivisors;
}

function getTriangleNumberDivisors(n) {
  var count = 0, i, numberOfDivisors, currentDivisorsLength = 0;
  if (typeof n == "undefined") {
	for (i = 1; currentDivisorsLength <= 500; i++) {
	  count += i;
	  numberOfDivisors = getNumberOfDivisors(count);
	  if (numberOfDivisors > currentDivisorsLength) {
		currentDivisorsLength = numberOfDivisors;
	  }
	  if (currentDivisorsLength > 500) {
		break;
	  }
	}
  }
  else {
	for (i = 1; i <= n; i++) {
	  count += i;
	  numberOfDivisors = getNumberOfDivisors(count);
	  if (numberOfDivisors > currentDivisorsLength) {
		currentDivisorsLength = numberOfDivisors;
	  }
	  if (currentDivisorsLength > 500) {
		break;
	  }
	}
  }
  console.log('Last index: '+parseInt(i-1));
  console.log('Last triangle number: '+count+' -> ', numberOfDivisors);
  return currentDivisorsLength;
}
function run(n) {
	var startTime = (new Date).getTime();
	var triangleNumberWithOver500Divisors = getTriangleNumberDivisors(n);
	var endTime = (new Date).getTime();
	console.log('Number of divisors: ', triangleNumberWithOver500Divisors);
	console.log('Speed: '+(endTime - startTime));
}
function findTriangleNumberWithOver500Divisors() {
  run();
}