// Hard code the primes under 20.
var primes = [2,3,5,7,11,13,17,19];
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