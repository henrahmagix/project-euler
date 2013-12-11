// Converts a string to an array of characters, then returns the reverse as a string.
String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}