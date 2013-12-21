function sumDigits(n) {
	var startTime = (new Date).getTime();
	var bigArray = [2];
	var extent = n;
	var i, j, bigArrayLength;
	
	for (i=1; i<extent; i++) {
		bigArrayLength = bigArray.length;
		// Go from the last array number to 0, i.e. right to left.
		for (j=bigArrayLength-1; j!==-1; j--) {
			// Multiply by 2.
			bigArray[j] <<= 1;
			// Is the digit now into the tens?
			if (bigArray[j] >= 10) {
				bigArray[j] -= 10;
				// Check the next digit upwards, so go right in the array.
				if (bigArray[j+1] === undefined) {
					// Create the next decimal set.
					bigArray.push(1);
				}
				// Digit already set? Then add 1.
				else {
					bigArray[j+1] += 1;
				}
			}
		}
	}
	var endTime = (new Date).getTime();
	var totalTime = endTime - startTime;
	
	var sum = 0;
	//console.log(bigArray.length);
	// Add up all the digits.
	for (i=0; i<bigArray.length; i++) {
		sum += bigArray[i];
	}
	//console.log(sum);
	
	//console.log('Time taken: '+totalTime);
	// */
	return totalTime;
}

/**
 * Second method
 */
function sumDigitsSlow(n) {
	var startTime = (new Date).getTime();
	var bigArray = [2];
	var extent = n;
	var i, j;
	
	for (i=1; i<extent; i++) {
		// Go from 0 to the last array number, i.e. left to right.
		for (j=0; j<bigArray.length; j++) {
			// Multiply by 2.
			bigArray[j] <<= 1;
			// Is the digit now into the tens?
			if (bigArray[j] >= 10) {
				bigArray[j] -= 10;
				// Check the next digit upwards, so go left in the array.
				if (bigArray[j-1] === undefined) {
					// Need to unshift (add element to beginning of array) in order
					// to work on higher digits before lower, i.e. hundreds before tens.
					bigArray.unshift(1);
					// Since an element has been added to the beginning of the array,
					// we need to point to the correct index of our current digit, which
					// is one more to the right.
					j++;
				}
				// Digit already set? Then add 1.
				else {
					bigArray[j-1] += 1;
				}
			}
		}
	}
	var endTime = (new Date).getTime();
	var totalTime = endTime - startTime;
	
	var sum = 0;
	//console.log(bigArray.length);
	// Add up all the digits.
	for (i=0; i<bigArray.length; i++) {
		sum += bigArray[i];
	}
	//console.log(sum);
	
	//console.log('Time taken: '+totalTime);
	return totalTime;
	// */
}

var i = 0, timers = [];
timers[0] = [];
timers[1] = [];

while (i<10) {
	timers[0].push(sumDigits(10000));
	timers[1].push(sumDigitsSlow(10000));
	i++;
}

var meanFast=0, meanSlow=0;
i=0;
while (i<timers[0].length) {
	meanFast += timers[0][i];
	meanSlow += timers[1][i];
	i++;
}
meanFast /= timers[0].length;
meanSlow /= timers[1].length;
console.log('Using array.push(), average time taken = '+meanFast);
console.log('Using array.unshift(), average time taken = '+meanSlow);
