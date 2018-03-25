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
		let inputArr = input[1];

		console.log(countMajority(inputArr));
		process.exit();
	}
}

function countMajority(inputArr) {
	if (inputArr.length === 0) return 0;
	if (inputArr.length === 1) return [0];

	let midpoint = Math.floor(inputArr.length / 2);
	let majorityVote = midpoint + 1;
	let leftHalf = votes.slice(0, midpoint);
	let rightHalf = votes.slice(midpoint);
	let leftMajority = countMajority(leftHalf);
	let rightMajority = countMajority(rightHalf);
}

module.exports = {
	countMajority,
};
