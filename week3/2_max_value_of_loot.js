var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
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

	// number of items in bag
	let numItems = parseInt(input[0][0]);

	if (input.length === numItems + 1) {
		let bagWeightCapacity = input[0][1];
		let items = input.slice(1);
		console.log(maxValueLoot(bagWeightCapacity, items));
		process.exit();
	}
}

function maxValueLoot(bagWeightCapacity, items) {
	let finalValue = 0;
	let index = 0;

	// sort items array by the value / weight ratio
	items.sort((a, b) => b[0] / b[1] - a[0] / a[1]);

	while (bagWeightCapacity > 0 && items[index]) {
		let currentItem = items[index];
		let currentItemValue = parseInt(currentItem[0]);
		let currentItemWeight = parseInt(currentItem[1]);

		if (currentItemWeight < bagWeightCapacity) {
			finalValue += currentItemValue;
			bagWeightCapacity -= currentItemWeight;
			index++;
		} else {
			finalValue += bagWeightCapacity / currentItemWeight * currentItemValue;
			bagWeightCapacity = 0;
		}
	}

	return finalValue.toFixed(4);
}
