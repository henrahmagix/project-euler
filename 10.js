function sum_primes(n) {
    var i, j, primes=[], count=0;

    // Start the sieve!
    for (i=3; i<n; i+=2) {
        // Already marked? Continue to next number.
        if (primes[i] === true) continue;
        // Number is unmarked. Start second loop to find multiples.
        for (j=2*i; j<=n; j+=i) {
            // Not marked? Mark it.
            if (primes[j] !== true) primes[j] = true;
        }
    }

    // Now lets add up all the unmarked numbers, which we know to be primes.
    count += 2; // Add 2, the first prime.
    for (i=2; i<=n; i++) {
        if (i%2 !== 0 && primes[i] !== true) {
            count += i;
        }
    }
    return count;
}
// Return the sum of all primes below 2million.
var output = sum_primes(2000000);
console.log('Answer is '+output);