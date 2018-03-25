let readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

let input = [];

function readLine(line) {
	if (line !== 'n') {
		line = line
			.toString()
			.split(' ')
			.map(num => parseInt(num));
		input.push(line);
	}

	if (input.length === 2) {
		let arrSize = input[0];
		let inputArr = input[1];

		console.log(countMajority(arrSize, inputArr));
		process.exit();
	}
}

function countMajority(arrSize, inputArr) {
	let occurances = {};
	let currentNum;
	let maxNum = inputArr[0];
	let majorityCounter = 0;

	for (let i = 0; i < arrSize; i++) {
		currentNum = arrSize[i];
		// if there is no current count, add 1
		if (occurances[currentNum]) {
			occurances[currentNum]++;
		} else {
			occurances[currentNum] = 1;
		}
		// if current count > maxCount, switch currentCount to maxCount
		if (occurances[currentNum] > occurances[maxNum]) {
			maxNum = currentNum;
		}
		// if maxCount > majority so inputArr.length / 2, add counter ++ ?
	}
	if (occurances[maxNum] > inputArr.length / 2) {
		console.log('inside max count');
		majorityCounter++;
	}
	return majorityCounter;
}

module.exports = {
	countMajority,
};
