var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const readLines = line => {
  parseLines = parseLines(line);
}

rl.on('line', readLines);


function parseLine(line) {
  return line.split(' ').map(number => parseInt(number, 10));
}

let parseLines = (firstLine) => (secondLine) => {
  var size = parseInt(firstLine, 10);
  var a = parseLine(secondLine);
  randomizedQuickSort(a, 0, a.length - 1);
  a.forEach(item => {
    process.stdout.write(item + ' ');
  })
  process.exit();
}

function randomizedQuickSort(a, low, high) {
  if (low >= high) {
    return;
  }
  var random = Math.floor(Math.random() * (high - low + 1)) + low;
  var temp = a[low];
  a[low] = a[random];
  a[random] = temp;

  var [m1, m2] = partition3(a, low, high);
  randomizedQuickSort(a, low, m1);
  randomizedQuickSort(a, m2, high);
}

const swap = (array, a, b) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function partition3(array, left, right) {
  var pivot = array[left];
  var m1 = left;
  var m2 = left + 1;
  for (let i = left + 1; i <= right; i++) {
    if (array[i] < pivot) {
      swap(array, i, m1);
      swap(array, i, m2);
      m1++;
      m2++;
    } else if (array[i] === pivot) {
      swap(array, i, m2);
      m2++;
    }
  }
  return [m1, m2 > right ? right : m2];
}