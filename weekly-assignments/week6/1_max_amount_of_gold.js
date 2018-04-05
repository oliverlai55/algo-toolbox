const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

rl.on('line', readLine);

let input = [];

function readLine(line) {
  if (line !== '\n') {
    line = line.toString().split(' ');
    input.push(line);
  }

  if (input.length === 2) {
    let bagWeightCap = input[0][0];
    let bagItemCap = input[0][1];
    let itemWeightArr = input[1];
    knapsack(bagWeightCap, bagItemCap, itemWeightArr);
    process.exit();
  }
}

let totalWeight = 0;
let itemsInBag = [];

const knapsack = (bagWeightCap, bagItemCap, itemWeightArr) => {
  for (let i = 0; i < itemWeightArr.length; i++) {
    if (itemWeightArr[i] < bagWeightCap) {
      bagWeightCap -= itemWeightArr[i];
      itemsInBag.push(itemWeightArr[i]);
      totalWeight += itemWeightArr[i];
    }

    if (itemWeightArr[i] > bagWeightCap) {
      for (let j = 0; j < itemsInBag; j++) {

      }
    }
  }
}

const memoize(fn) {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

// use memoization
// ask bryan why if val > value(w) value(w) = val;?
// What is val exactly?

// loop through first time, if it fits, put in bag
// if it gets to an item that is larger weight than bag capacity,
// compare the weight of that item with the weight of the items currently in bag, if its larger weight but still within bag capacity, swtich out the item??
// compare the totalWeight of having one tiem vs another item,
