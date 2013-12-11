/**
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
 */
function collatz() {
  this.n = 1;
  this.chain = [ ];
  this.end = false;
}
collatz.prototype.set = function(value) {
  this.n = value;
  this.chain = [ ];
  this.end = false;
}

collatz.prototype.run = function() {
  if (!this.end) {
    this.chain.push(this.n);
    
    if (this.n === 1) {
      this.end = true;
      return this.chain;
    }
    
	/* Now using bitwise ops below.
    if (this.n % 2 === 0) this.n /= 2;
    else this.n = (3 * this.n) + 1;
    // */
	if ((this.n & 1) === 0) this.n /= 2;
    else this.n = (3 * this.n) + 1;
	
    return this.run();
  }
  else return "End";
}

collatz.prototype.runalt = function() {
  if (!this.end) {
    this.chain.push(this.n);
    
    if (this.n > 1000) {
      this.end = true;
      return this.chain;
    }
    
    if ((this.n - 1) % 3 === 0) this.n = (this.n - 1) / 3;
    else this.n *= 2;
    
    return this.runalt();
  }
  else return "End";
}

function findCollatz() {
	var num = 1000000; // One million.
	var x = new collatz();
	var terms = [ ], answer = [ ], saved = [ ], skipped = [ ];
	var starter = 0;

	/*
	for (var i=1000000; i>2; i--) {
	  x.set(i);
	  terms = x.run();
	  if (terms.length > answer.length) {
		answer = terms;
		starter = i;
	  }
	}
	// */


	for (var i=1000000; i>2; i--) {
	  if (saved.indexOf(i) === -1) {
		x.set(i);
		terms = x.run();
		if (terms.length > answer.length) {
		  answer = terms;
		  saved = saved.concat(terms);
		  //console.log(saved);
		  starter = i;
		  //break;
		}
	  }
	  else {
		skipped.push(i);
	  }
	}
	console.log('Skipped ', skipped);
	console.log('Answer ', answer.length, answer[0]);
	console.log(answer);
	// */

	/*
	x.set(1000000);
	console.log(x.run());
	// */
}
var start = (new Date).getTime();
findCollatz();
var end = (new Date).getTime();
var time = end - start;
console.log('Time taken: ',time);