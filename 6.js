var i=1, sums=0, squares=0;


while (i<=100) {
    sums += Math.pow(i,2);
    squares += i;
    i++;
}

squares = Math.pow(squares,2);

console.log('Sum of squares = '+sums);
console.log('Square of sums = '+squares);
console.log('Difference = '+(squares - sums));