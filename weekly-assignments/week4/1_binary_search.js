let readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

let input = [];

// First line 5 1 5 8 12 13
// 5 is the length of array, the rest is sorted Array
// Seond line 5 8 1 23 1 11
// 5 is also the lenth, the rest are search inputs used to do binarySearch
// put inputs in array but slice off the first input 

function readLine(line) {
  if (line !== 'n') {
    line = line.toString().split(' ');
    input.push(line);
  }

  if (input.length === 3) {

  }
}

module.exports = binarySearch;
