String.prototype.getLength = function() {
  return this.replace(/ /g,'').length
};
var units = []; // Holds units and teens
units[0] = [
  0,
  'one'.length,
  'two'.length,
  'three'.length,
  'four'.length,
  'five'.length,
  'six'.length,
  'seven'.length,
  'eight'.length,
  'nine'.length,
]; // 0-9
units[1] = [
  'ten'.length,
  'eleven'.length,
  'twelve'.length,
  'thirteen'.length,
  'fourteen'.length,
  'fifteen'.length,
  'sixteen'.length,
  'seventeen'.length,
  'eighteen'.length,
  'nineteen'.length,
]; // 10-19
units[2] = units[3] = units[4] = units[5] = units[6] = units[7] = units[8] = units[9] = units[0]; // All other ten units are same as units[0]

var tens = [
  0,
  0,
  'twenty'.length,
  'thirty'.length,
  'forty'.length,
  'fifty'.length,
  'sixty'.length,
  'seventy'.length,
  'eighty'.length,
  'ninety'.length,
]; // 0-90 in tens, not including 10 (already in units[1][0])

var hundreds = [
  0,
  'one hundred and'.getLength(),
  'two hundred and'.getLength(),
  'three hundred and'.getLength(),
  'four hundred and'.getLength(),
  'five hundred and'.getLength(),
  'six hundred and'.getLength(),
  'seven hundred and'.getLength(),
  'eight hundred and'.getLength(),
  'nine hundred and'.getLength(),
]; // 0-900 in hundreds, including 'and'

var thousands = [
  0,
  'one thousand'.getLength(),
]; // Only need 0 and 1000



var unit, ten, hundred, thousand, count = 0;
var lengths = [];
lengths[1] = units[0].length;
lengths[10] = tens.length;
lengths[100] = hundreds.length;
lengths[1000] = thousands.length;

loop:
for (thousand = 0; thousand < lengths[1000]; thousand++) {
  for (hundred = 0; hundred < lengths[100]; hundred++) {
    for (ten = 0; ten < lengths[10]; ten++) {
      for (unit = 0; unit < lengths[1]; unit++) {
        count += thousands[thousand];
        count += hundreds[hundred];
        count += tens[ten];
        count += units[ten][unit];
        if (hundred > 0 && ten === 0 && unit === 0) {
          count -= 3; // Remove "and" from 100, 200... 900.
        }
        if (thousand === 1) {
          break loop;
        }
      }
    }
  }
}
console.log(count);