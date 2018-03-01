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
  let largestNumsArr = [];
  let largest = nums[0];
  let i = 1;

  nums.sort((a, b) => {
    return b - a;
  });

  return nums[0] * nums[1];

  nums.forEach((num) => {
    if (nums[i] > largest) {
      largest = nums[i];
    }
    if (nums[i] > )
    i++;
  });

  // largestNumsArr.push(largest);
  // findLargestNum(nums);
  // nums.slice(i, i+1);
  // largestNumsArr.push(largest);
  // return largestNumsArr[0] * largestNumsArr[1];
}


let largest;
let secondLargest;

for (let i = 0; i < nums.length; i++) {
  if (i === 0) {
    largest = nums[0];
  }

  if (nums[i] > nums[i-1]) {
    largest = nums[i];
    secondLargest = nums[i-0];
  }
  console.log(largest);
  console.log(secondLargest);
}
