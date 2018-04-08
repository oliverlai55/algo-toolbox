const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
	input: process.stdin,
});

rl.on('line', data => {
	console.log(maxValue(data.toString()));
	process.exit();
});

let minMatrix = [],
	maxMatrix = [];

const minMax = (startIdx, endIdx, integers, operations) => {
	let min = Infinity,
		max = -Infinity;

	for (let i = startIdx; i < endIdx; i++) {
		let maxStart = maxMatrix[startIdx][i];
		let maxEnd = maxMatrix[i + 1][endIdx];
		let minStart = minMatrix[startIdx][i];
		let minEnd = minMatrix[i + 1][endIdx];

		let a = compute(maxStart, maxEnd, operations[i]);
		let b = compute(maxStart, minEnd, operations[i]);
		let c = compute(minStart, maxEnd, operations[i]);
		let d = compute(minStart, minEnd, operations[i]);

		min = [min, a, b, c, d].reduce((e1, e2) => Math.min(e1, e2));
		max = [max, a, b, c, d].reduce((e1, e2) => Math.max(e1, e2));
	}
	return [min, max];
};

const compute = (num1, num2, operation) => {
	switch (operation) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
	}
};

const maxValue = expression => {
	let integers = [],
		operations = [];
	for (let idx in expression) {
		if (idx % 2 === 0) {
			integers.push(parseInt(expression[idx]));
		} else {
			operations.push(expression[idx]);
		}
	}
	let n = integers.length;
	for (let idx in integers) {
		minMatrix.push([]);
		minMatrix[idx][idx] = integers[idx];
		maxMatrix.push([]);
		maxMatrix[idx][idx] = integers[idx];
	}
	// calculating diagnoal rows in min & max matrix,
	// aka difference between i & j = pairDiff
	for (let pairDiff = 1; pairDiff <= n - 1; pairDiff++) {
		for (let i = 1; i <= n - pairDiff; i++) {
			let a, b;
			let j = i + pairDiff;
			let [min, max] = minMax(i - 1, j - 1, integers, operations);
			(minMatrix[i - 1][j - 1] = min), (maxMatrix[i - 1][j - 1] = max);
		}
	}
	return maxMatrix[0][n - 1];
};

