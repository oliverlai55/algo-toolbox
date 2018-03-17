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
