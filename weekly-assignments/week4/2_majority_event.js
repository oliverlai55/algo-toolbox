const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

let input = [];

function readLine(line) {
	if (line !== '\n') {
		line = line
			.toString()
			.split(' ')
			.map(num => parseInt(num));
		input.push(line);
	}

	if (input.length === 2) {
		let inputArr = input[1];
		console.log(!!countMajority(inputArr) * 1);
		process.exit();
	}
}

function countMajority(inputArr) {
	if (inputArr.length === 0) return 0;
	if (inputArr.length === 1) return inputArr[0];

	let midpoint = Math.floor(inputArr.length / 2);
	let majorityVote = midpoint + 1;

	let leftHalf = inputArr.slice(0, midpoint);
	let rightHalf = inputArr.slice(midpoint);
	let leftMajority = countMajority(leftHalf);
	let rightMajority = countMajority(rightHalf);

	if (leftMajority === rightMajority) {
		return leftMajority;
	}

	// starts off with 0 votes
	let leftVotes = 0;
	let rightVotes = 0;

	for (let i = 0; i < inputArr.length; i++) {
		if (inputArr[i] === leftMajority) leftVotes++;
		if (leftVotes >= majorityVote) return leftMajority;
		if (inputArr[i] === rightMajority) rightVotes++;
		if (rightVotes >= majorityVote) return rightMajority;
	}
	return 0;
}

// module.exports = {
// 	countMajority,
// };
