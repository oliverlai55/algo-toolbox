var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let lineNo = 0;
let n;
let nums;

function readLine (line) {
  if (lineNo === 0) {
    n = parseInt(line);
    lineNo++;
  } else {
    nums = line.split(' ').map(num => parseInt(num));
    console.log(maxPairwiseProductFast(nums));
    process.exit();
  }
}

function maxPairwiseProductFast (nums) {
  nums.sort((a, b) => {
    return b - a;
  });

  return nums[0] * nums[1];
}
