Number.prototype.isMultipleOf = function(n) {
    return (this.valueOf() % n === 0);
}

function sumOfAllMultiples(upperLimit, multiplesArray) {
    var i, j, nums = [ ], output = 0;
    for (i = 1; i < upperLimit; i++) {
        for (j = 0; j < multiplesArray.length; j++) {
            if (i.isMultipleOf(multiplesArray[j])) {
                output += i;
                break;
            }
        }
    }
    return output;
}
console.log(sumOfAllMultiples(1000, [3, 5]));
