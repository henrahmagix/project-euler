/**
  A permutation is an ordered arrangement of objects. For example, 3124 is one
  possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
  are listed numerically or alphabetically, we call it lexicographic order. The
  lexicographic permutations of 0, 1 and 2 are:
  
  012   021   102   120   201   210
  
  What is the millionth lexicographic permutation of the digits
  0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
  
  http://stackoverflow.com/questions/352203/generating-permutations-lazily/
**/
//var totalPermutations = 10*9*8*7*6*5*4*3*2*1; // 3628800
//var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function calculatePermutations(digits) {
	if (typeof digits === "undefined") {
		digits = [0, 1, 2];
	}
	else {
		digits.sort();
	}
	
	var numberOfPermutations = 1;
	var lastPermutation = digits.slice(0).reverse();
	var i;
	for (i = digits.length; i > 0; i--) {
		numberOfPermutations *= i; // Equivalent to factorial.
	}
	
	var permutations = [digits];
	var currentPermutation = digits;
	
	for (i = 0; i < numberOfPermutations-1; i++) {
		nextPermutation = getNextPermutation(currentPermutation);
		permutations.push(nextPermutation);
		if (nextPermutation == lastPermutation) {
			break;
		}
		currentPermutation = nextPermutation;
	}
	return permutations;
}

function getNextPermutation(currentPerm) {
	var largestDigit = currentPerm.slice(0); largestDigit.sort().reverse(); largestDigit = largestDigit[0];
	var i, j, currentPermSlice, nextPerm, currentDigit, currentDigitIndex, swapDigit, swapDigitIndex, tail = [ ];
	
	// Get the longest tail of descending digits.
	var lastIndex = currentPerm.length-1;
	for (i = lastIndex; i >= 0; i--) {
		if (i !== lastIndex) {
			if (currentPerm[i] > currentPerm[i+1]) tail.push(currentPerm[i]);
			else break; // This preserves i, so we know which element of digits[] to swap.
		}
		else tail.push(currentPerm[i]);
	}
	// End if the tail has consumed the entire permutation.
	if (tail.length === currentPerm.length) return false;
	// Reverse the tail to get the digits in the same order in which they came from digits[].
	//if (tail.length > 1) tail.reverse(); // No point reversing an array of length 1.
	// Now we have the tail, lets swap the closest larger digit to the last loop index.
	currentDigit = currentPerm[i];
	currentDigitIndex = i;
	currentPermSlice = currentPerm.slice(0, i);
	
	// Find the closest larger digit in the tail to swap.
	if (tail.length === 1) {
		swapDigit = tail[0];
		swapDigitIndex = 0;
	}
	else {
		// Start at the integer closest to currentDigit (currentDigit+1) and work up to the largestDigit in currentPerm[].
		for (j = currentDigit+1; j <= largestDigit; j++) {
			swapDigitIndex = tail.indexOf(j);
			if (swapDigitIndex !== -1) break;
		}
		swapDigit = tail[swapDigitIndex];
	}
	
	// Lets swap currentDigit with swapNumber.
	currentPermSlice[currentDigitIndex] = swapDigit;
	tail[swapDigitIndex] = currentDigit;
	// And now create the next permutation.
	nextPerm = currentPermSlice.concat(tail);
	return nextPerm;
}

function printPermutations(perms) {
	for (var i = 0; i < perms.length; i++) {
		console.log(perms[i]);
	}
}
function printSinglePermutation(perms, i) {
	console.log(perms[i-1]);
}
printSinglePermutation(calculatePermutations([0,1,2,3,4,5,6,7,8,9]), 1000000);