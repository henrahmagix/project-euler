function get_primes(n) {
    var i, j, primes=[], count=[];

    // Start the sieve!
    for (i=3; i<(n>>1); i+=2) {
        // Already marked? Continue to next number.
        if (primes[i] === true) continue;
        // Number is unmarked. Start second loop to find multiples.
        for (j=(i<<1); j<=n; j+=i) {
            // Not marked? Mark it.
            if (primes[j] !== true) primes[j] = true;
        }
    }

    // Now lets add up all the unmarked numbers, which we know to be primes.
    for (i=2; i<=n; i++) {
        if (primes[i] !== true) {
            // If i is not an even number, add it. Exception added if i is 2.
            if (i === 2 || i&1 === 1) count.push(i);
        }
    }
    return count;
}
function find_divisors(n) {
    // Hard code the primes under 20.
    //var primes = [2,3,5,7,11,13,17,19];
    var primes = get_primes(20);
    var end = 20, i = 0, log=[], factors=[], exponent=1, result=1;
    while (i<primes.length) {
        if (primes[i] < Math.sqrt(end)) {
            log[i] = Math.log(end) / Math.log(primes[i]);
            log[i] = Math.floor(log[i]);
        }
        else log[i] = 1;
        factors[i] = Math.pow(primes[i], log[i]);
        result *= factors[i];
        console.log('Prime:'+primes[i]+' exponent:'+log[i]+' result:'+factors[i]);
        i++;
    }
    console.log(result);
}
find_divisors();