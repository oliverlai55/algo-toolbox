const readline = require('readline');
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
    input.push(line);''
  }
}
// use memoization
// ask bryan why if val > value(w) value(w) = val;?
// What is val exactly?
