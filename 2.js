function sumOfEvenFibonacciNumbers(max) {
    var x=0, y=1, save, nums=[], output=0;
    while (y <= max) {
        //nums.push(y);
        if ((y & 1) === 0) output += y;
        save = y; // Save y...
        y += x; // ...get the next number...
        x = save; // ...finally set x to y's original value.
    }
    //return nums;
    return output;
}
console.log(sumOfEvenFibonacciNumbers(4000000));