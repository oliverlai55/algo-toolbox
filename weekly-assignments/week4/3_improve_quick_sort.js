const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let input = [];

rl.on('line', readLine);

function readLine(line) {
  if (line !== "\n") {
    input.push(line.toString().split(' ').map(num => parseInt(num)));
  }

  if (input.length === 2) {
    let nums = input[1];
    quickSort(nums);
    nums.forEach(num => process.stdout.write(`${num} `));
    process.exit();
  }
}

const quickSort = (nums, start = 0, end = nums.length - 1) => {
  if (end <= start) return;
  let randomElement = start + Math.floor(Math.random() * (end - start + 1));
  swap(nums, start, randomElement);
  let [m1, m2] = partition3(nums, start, end);
  quickSort(nums, start, m1 - 1);
  quickSort(nums, m2 + 1, end);
}

const swap = (array, a, b) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const partition3 = (array, start, end) => {
// we set equal to start of the array? Why?
  let less = equal = start; // What exactly is 'less' ?
  let target = array[start];  // picking 1st element as pivot?

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < target) { // if array[i] < pivot, swap i with the pivot index?
      less++;
      equal++;
      swap(array, i, less);
      if (less !== equal) swap(array, i, equal);
    } else if (array[i] === target) {
      equal++;
      swap(array, i, equal);
    }
  }
  swap(array, less, start);
  return [less, equal];
}
