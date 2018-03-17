var readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

let input = [];

function readLine(line) {
	if (line !== 'n') {
		line = line.toString().split(' ');
		input.push(line);
	}

	if (input.length === 3) {
		let numOfSlots = input[0];
		let profitPerClick = input[1];
		let clicksPerDay = input[2];

		console.log(maxAdRevenue(numOfSlots, profitPerClick, clicksPerDay));
		process.exit();
	}
}

function maxAdRevenue(numOfSlots, profitPerClick, clicksPerDay) {
	let maxRevenue = 0;
	let descending = (a, b) => b - a;
	profitPerClick.sort(descending);
	clicksPerDay.sort(descending);

	for (let i = 0; i < numOfSlots; i++) {
		maxRevenue += parseInt(profitPerClick[i]) * parseInt(clicksPerDay[i]);
	}

	return maxRevenue;
}

// Input line 1 = number of slots avail
// sort line 2 array (clicks)
// sort line 3 array (profit)
// have to take care of the negative numbers??
// Given that its under number of slots, return the value of clicks x profit
