const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin
})

let input = [];

rl.on("line", data => {
  input.push(data.toString().split(' ').map(num => parseInt(num)));

  if (input.length === 2) {
    let capacity = input[0][0];
    let weights = input[1];

    console.log(maxGold(capacity, weights));
    process.exit();
  }
})

const maxGold = (capacity, weights) => {
  let goldMatrix = [], val, i;

  for (i = 0; i <= weights.length; i++) {
    goldMatrix.push([]);

    for (let cap = 0; cap <= capacity; cap++) {

      if (i === 0 || cap === 0) {
        goldMatrix[i][cap] = 0;
      } else {
        goldMatrix[i][cap] = goldMatrix[i - 1][cap];
        if (weights[i-1] <= cap) {
          val = goldMatrix[i - 1][cap - weights[i-1]] + weights[i-1];
          if (goldMatrix[i][cap] < val) goldMatrix[i][cap] = val;
        }
      }
    }
  }
  return goldMatrix[i-1][capacity]

}
