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
		console.log(knapsack(bagWeightCap, bagItemCap, itemWeightArr));
		process.exit();
	}
}

const knapsack = (bagWeightCap, bagItemCap, itemWeightArr) => {
	let goldMatrix = [];
	let val;
	let i;

	for (i = 0; i < bagItemCap; i++) {
		goldMatrix.push([]);

		for (let w = 0; w < bagWeightCap; w++) {
			if (i === 0 || w === 0) {
				goldMatrix[i][w] = 0;
			} else {
				goldMatrix[i][w] = goldMatrix[i - 1][w];
				if (itemWeightArr[w] <= bagWeightCap) {
					val = goldMatrix[i - 1][bagWeightCap - w] + itemWeightArr[w];
					if (goldMatrix[i][w] < val) {
						goldMatrix[i][w] = val;
					}
				}
			}
		}
	}
	return goldMatrix[i][w];
};

// const memoize(fn) {
//   const cache = {};
//   return (...args) => {
//     if (cache[args]) {
//       return cache[args];
//     }
//     const result = fn.apply(this, args);
//     cache[args] = result;
//
//     return result;
//   }
// }

// use memoization
// ask bryan why if val > value(w) value(w) = val;?
// What is val exactly?

// loop through first time, if it fits, put in bag
// if it gets to an item that is larger weight than bag capacity,
// compare the weight of that item with the weight of the items currently in bag, if its larger weight but still within bag capacity, swtich out the item??
// compare the totalWeight of having one tiem vs another item,
