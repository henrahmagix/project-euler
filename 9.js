/**
 * This is being kept as an example of adding custom methods to the Object prototype.
 */
Number.prototype.sq = function(){return Math.pow(this,2)};
Number.prototype.pow = function(n){return Math.pow(this,n)};
Number.prototype.makepos = function(){return Math.sqrt(this.sq())};
var n = 1, output;
while (n<300) {
    t = Math.floor( (3+Math.sqrt(8*n-7))/2 );
    s = n -(t.sq()-3*t+2)/2;
    x = 2*s*t
    y = t.sq() - s.sq();
    z = t.sq() + s.sq();
    sum = x.makepos()+y.makepos()+z.makepos();
    if (sum === 1000 || (sum>900 && sum<1100)) {
        output = ['For n = '+n, 'x='+x, 'y='+y, 'z='+z, 'sum='+sum];
        console.log(output.join(', '));
        if (sum === 1000) break;
    }
    else if (sum > 1100) {
        break;
    }
    n++;
}
console.log(n, sum);

/**
 * Here is the code that finds the answer.
 */
function find(x,y,z) {
    var sum=0, i=1, a, b, c;
    do {
        a = x*i;
        b = y*i;
        c = z*i;
        sum = a+b+c;
        i++;
    } while (sum != 1000 && sum < 1100);
    if (sum == 1000) {
        console.log('We have a winner!', 'Answer = '+(a*b*c));
        console.log('a='+a, 'b='+b, 'c='+c, 'sum='+sum);
    }
}
find(3,4,5);
find(5,12,13);
find(7,24,25);
find(8,15,17);
find(9,40,41);
find(11,60,61);
find(20,21,29);