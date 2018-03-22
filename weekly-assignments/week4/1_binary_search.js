let readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

let input = [];

function readLine(line) {
  if (line !== 'n') {
    line = line.toString().split(' ').map(num => parseInt(num));
    input.push(line);
  }

  if (input.length === 2) {
    let arraySize = input[0][0];
    let sortedArr = input[0].slice(1);
    let keyArr = input[1].slice(1);

    // let outputs = searchKeyIndex(arraySize, sortedArr, keyArr);
    // outputs.forEach(output => process.stdout.write(`${output} `));
    console.log(searchKeyIndex(arraySize, sortedArr, keyArr));
    process.exit();
  }
}

function searchKeyIndex(arraySize, sortedArr, keyArr) {
  let keyIndexArr = [];
  let keyIndex;
  let low = 0;
  let high = arraySize - 1;

  keyArr.forEach(key => {
    keyIndex = binarySearch(sortedArr, low, high, key);
    keyIndexArr.push(parseInt(keyIndex));
  })

  return keyIndexArr.join(' ');
}

function binarySearch(sortedArr, low, high, key) {
  if (key === sortedArr[low]) return low;
  if (key === sortedArr[high]) return high;

  let mid;

  if (high - low < 0) return - 1;
  mid = low + Math.floor((high - low) / 2);

  if (key === sortedArr[mid]) return mid;
  if (key < sortedArr[mid]) return binarySearch(sortedArr, low + 1, mid - 1, key);
  if (key > sortedArr[mid]) return binarySearch(sortedArr, low + 1, high - 1, key);
}

module.exports = {
  binarySearch,
  searchKeyIndex,
}
