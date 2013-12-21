/**
    Help:
    1
    2
    3
    4 : 2*2
    5
    6 : 2*3
    7
    8 : 2*2*2
    9 : 3*3
    10: 2*5

    1*2*3*2*2*5*2*3*7*2*2*2*3*3*2*5
    1*2*2*2*2*2*2*2*2*3*3*3*3*5*5*7

    1*8....*8....*4..*9..*9..*25.*7
    1*8..........*4..*9......*5..*7
**/

//698377680



function get_primes(n, m) {
    var i, j, primes=[], count=[], output=[];
    for (i=2; i<n/2; i++) {
        if (primes[i] === true) {
            continue;
        }
        for (j=2*i; j<=n; j+=i) {
            primes[j] = true;
        }
    }
    for (i=2; i<=n; i++) {
        if (primes[i] !== true) {
            count.push(i);
        }
    }
    output.push('Number of primes: '+count.length);
    output.push(m+' prime is '+count[m]);
    return count;
}
function run(num, use_num) {
    var prime, primes = get_primes(use_num, 10000), x=primes.length, output=[], factors=1;
    for (var i=1; i<x; i++) {
        prime = primes[i];
        if ((num%prime) === 0) {
            output.push[prime];
            factors *= prime;
        }
        if ((num/factors) === 1) break;
    }
    return output;
}
var use_num = Math.round(Math.sqrt(600851475143));
//console.log(get_primes(use_num, 1));
console.log(run(600851475143, use_num));
