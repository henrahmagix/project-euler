/**
  You are given the following information, but you may prefer to do some research for yourself.
  
  1 Jan 1900 was a Monday.
  Thirty days has September,
  April, June and November.
  All the rest have thirty-one,
  Saving February alone,
  Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.
  A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
  How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
**/

// Setup our month arrays.
daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]; // Reference.
firstDayOfMonths = [1,32,60,91,121,152,182,213,244,274,305,335]; // Number in range(1,365) of first day of each month.
firstDayOfMonthsLeap = [1,32,61,92,122,153,183,214,245,275,306,336]; // Number in range(1,366) of first day of each month.

// 1st Jan 1901 is a Tuesday, so the first Sunday of 1901 is the 6th of Jan.
sunday = 6;
numberOfSundays = 0;

// Iterate through the years.
yearsLoop:
for (i=1901; i<=2000; i++) {
  
  /**
   * For each year, determine the following:
   * -  Is it a leap year? We don't bother calculating for centuries divisable by
   *    400, since 2000 is the only century we are dealing with, and is a leap year.
   * -  How many days are in this year?
   * -  Which array of month values do we need to use?
   */
  leapYear = (i%4 == 0) ? true : false; // Is this a leap year?
  days = (leapYear) ? 366 : 365;
  months = (leapYear) ? firstDayOfMonthsLeap : firstDayOfMonths;
  
  // Iterate through days by 7 to travel through all the Sundays.
  daysLoop:
  for (j=sunday; j<=days; j+=7) {
    // Is this day in our array of months?
    if (months.indexOf(j) !== -1) {
      numberOfSundays++; // We have encountered a Sunday.
    }
  }
  
  // At the end of daysLoop, j is the value of the first sunday of the next year,
  // including all the days of the current year, so remove the days of the current
  // year from j, and set that value to sunday.
  sunday = j - days;
}

console.log(numberOfSundays);