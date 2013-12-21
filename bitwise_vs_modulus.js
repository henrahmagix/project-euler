function bitwise(n) {
    var start = (new Date).getTime();
    for (var i=0; i<n; i++) {
        i & 1;
    }
    var end = (new Date).getTime();
    var time = end - start;
    console.log(time);
}
function modulus(n) {
    var start = (new Date).getTime();
    for (var i=0; i<n; i++) {
        i % 2;
    }
    var end = (new Date).getTime();
    var time = end - start;
    console.log(time);
}
