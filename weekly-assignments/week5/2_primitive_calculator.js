const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', readLine);

function readLine(line) {
	if (line !== '\n') {
		let result = calculator(parseInt(line));
		let minCalculations = result[0];
		let sequenceOfNums = result[1];

		process.stdout.write(minCalculations + '\n');
		sequenceOfNums.forEach(num => process.stdout.write(`${num}`));
		process.exit();
	}
}

const calculator = goalNum => {
	let numOperations = [0, 0];
	let finalMin,
		finalSequence = [goalNum];

	for (let num = 2; num <= goalNum; num++) {
		numOperations[num] = 1;
		let minOperations = Infinity;
		if (num % 3 === 0) {
			minOperations = Math.min(minOperations, numOperations[num / 3]);
		}
		if (num % 2 === 0) {
			minOperations = Math.min(minOperations, numOperations[num / 2]);
		}
		minOperations = Math.min(minOperations, numOperations[num - 1]);
		numOperations[num] += minOperations;
	}
	finalMin = numOperations[goalNum];

	// Finding sequence
	while (goalNum > 1) {
		let minOperations = Infinity;
		let divideByThree =
			goalNum % 3 === 0 ? numOperations[goalNum / 3] : Infinity;
		let divideByTwo = goalNum % 2 === 0 ? numOperations[goalNum / 2] : Infinity;
		let subtractOne = numOperations[goalNum - 1];

		minOperations = [
			minOperations,
			divideByThree,
			divideByTwo,
			subtractOne,
		].reduce((a, b) => Math.min(a, b));

		if (minOperations === divideByThree) {
			goalNum /= 3;
		} else if (minOperations === divideByTwo) {
			goalNum /= 2;
		} else {
			goalNum -= 1;
		}

		finalSequence.push(goalNum);
	}

	finalSequence.reverse();
	return [finalMin, finalSequence];
};
