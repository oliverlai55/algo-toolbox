var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

function readLine(line) {
	if (line !== '\n') {
		var a = parseInt(line.toString().split(' ')[0], 10);
		console.log();
		process.exit();
	}
}

function moneyChange(num) {}

