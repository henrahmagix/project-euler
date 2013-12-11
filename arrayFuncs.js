if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(func)
  {
    var len = this.length;
    if (typeof func != "function")
    {
      throw new TypeError();
    }

    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        // this[i] = element, i = index, this = array.
        func.call(thisp, this[i], i, this);
      }
    }
  };
}
if (!Array.prototype.sum) {
  Array.prototype.sum = function() {
    var i, sum = 0;
    for (i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  }
}