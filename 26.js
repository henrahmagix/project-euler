/*
  A unit fraction contains 1 in the numerator. The decimal representation of the
  unit fractions with denominators 2 to 10 are given:
  
  1/2	= 	0.5
  1/3	= 	0.(3)
  1/4	= 	0.25
  1/5	= 	0.2
  1/6	= 	0.1(6)
  1/7	= 	0.(142857)
  1/8	= 	0.125
  1/9	= 	0.(1)
  1/10	= 	0.1
  
  Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be
  seen that 1/7 has a 6-digit recurring cycle.
  
  Find the value of d < 1000 for which 1/d contains the longest recurring cycle in
  its decimal fraction part.
*/
function getDecimals(n) {
  if (typeof n === "number") n = n.toString();
  return n.slice(n.indexOf(".") + 1);
}
function findCycle(decs) {
  var i, cycle = [], nextCycle = [];
  cycle.push(decs[0]);
  i = 1;
  while (i < decs.length) {
    // Loop over cycle.length and check against decs, growing each time.
  }
}
function largestRecurringDecimalCycle() {
  var i, decs, cycle, largestCycle = 0;
  for (i = 0; i < 1000; i++) {
    decs = getDecimals(1 / i);
    if (decs.length > 5) {
      cycle = findCycle(decs);
    }
    if (cycle.length > largestCycle) largestCycle = cycle.length;
  }
}