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

function moneyChange(num) {}
