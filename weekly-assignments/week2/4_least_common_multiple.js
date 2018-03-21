var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let gcdNum;

function readLine (line) {
  if (line !== "\n") {
    var a = parseInt(line.toString().split(' ')[0], 10);
    var b = parseInt(line.toString().split(' ')[1], 10);
    console.log(lcm(a, b));
    process.exit();
  }
}

function lcm(a, b) {
  gcd(a, b);

  return  a * b / gcdNum;
}

function gcd(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  }

  let remainder = a % b;
  gcdNum = gcd(b, remainder);
  console.log(gcdNum);
  return gcdNum;
}
