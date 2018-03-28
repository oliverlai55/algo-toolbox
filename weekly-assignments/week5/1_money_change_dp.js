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

	if (input.length === 1) {
    let num = input[0];

		console.log(moneyChange(num));
		process.exit();
	}
}

const moneyChange = (num) => {
  let minNumCoins = 0;
  let denomination = [1, 3, 4];

  // loop through the money using lowest denomination
  // if counter = demoniation[i + 1], then counter = demoniation[i+11 - 1,
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < denomination.length - 1; j++) {
      minNumCoins++;

    }
  }
}
