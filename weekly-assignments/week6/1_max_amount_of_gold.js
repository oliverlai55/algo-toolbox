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

const knapsack = (bagWeightCap, bagItemCap, itemWeightArr) => {


}
// use memoization
// ask bryan why if val > value(w) value(w) = val;?
// What is val exactly?
