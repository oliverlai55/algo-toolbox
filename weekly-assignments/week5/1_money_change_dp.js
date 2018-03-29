var readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

function readLine(line) {
	if (line !== '\n') {
		let money = parseInt(line);
		console.log(moneyChange(money));
		process.exit();
	}
}

const moneyChange = money => {
	let minCoins = [0];
	let coins = [1, 3, 4];

	// loop through the money using lowest denomination
	// if counter = demoniation[i + 1], then counter = demoniation[i+11 - 1,
	for (let amount = 1; amount <= money; amount++) {
		// what is this Infinity thing in the slide?
		minCoins[amount] = Infinity;
		coins.forEach(coin => {
			let coinCount = 1;
			if (amount >= coin) {
				coinCount += minCoins[amount - coin];
				if (coinCount < minCoins[amount]) minCoins[amount] = coinCount;
			}
		});
	}
	return minCoins[money];
};

//perhaps start using variable name from the slide?
//http://www.columbia.edu/~cs2035/courses/csor4231.F07/dynamic.pdf
//https://www.youtube.com/watch?v=sn0DWI-JdNA
//https://www.quora.com/What-is-an-easy-way-to-understand-the-coin-change-problem-in-dynamic-programming
