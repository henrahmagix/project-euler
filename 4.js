function reverse(str){
    str = str.toString();
    return str.split("").reverse().join("");
}

var i = j = 999;
var x = 499;
var product, result=0, count=0;

while (i>=x) {
    product = i*j;
    if (product == reverse(product)) {
        if (product > result) {
            result = product;
            console.log(i+':'+j+' = '+result);
            x = i;
        }
        else if (product == result) {
            console.log('End');
            break;
        }
    }
    if (i===x) {
        i = 999;
        j--;
    }
    else i--;
}
console.log(result);