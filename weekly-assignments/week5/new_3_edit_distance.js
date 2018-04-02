const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
	input: process.stdin,
});

let input = [];

rl.on('line', data => {
	input.push(data);

	if (input.length === 2) {
		let str1 = input[0];
		let str2 = input[1];
		console.log(editDistance(str1, str2));
		process.exit();
	}
});

function editDistance(str1, str2) {
	let length1 = str1.length;
	let length2 = str2.length;
	let matrix = [];

	for (let i = 0; i <= length1; i++) {
		matrix.push([]);

		for (let j = 0; j <= length2; j++) {
			if (i === 0) {
				matrix[i][j] = j;
			} else if (j === 0) {
				matrix[i][j] = i;
			} else {
				let insert = matrix[i][j - 1] + 1;
				let erase = matrix[i - 1][j] + 1;
				let match =
					str1[i - 1] === str2[j - 1]
						? matrix[i - 1][j - 1]
						: matrix[i - 1][j - 1] + 1;

				matrix[i][j] = [insert, erase, match].reduce((a, b) => Math.min(a, b));
			}
		}
	}
	return matrix[length1][length2];
}

