var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

function readLine(line) {
	if (line !== '\n') {
		var num = parseInt(line.toString().split(' ')[0], 10);
		console.log(moneyChange(num));
		process.exit();
	}
}

function moneyChange(num) {
	let counter = 0;
	let amountOfCoin;
	let denomination = [10, 5, 1];

	for (let i = 0; i < denomination.length; i++) {
		amountOfCoin = Math.floor(num / denomination[i]);
		counter += amountOfCoin;
		num -= denomination[i] * amountOfCoin;
	}

	return counter;
}
