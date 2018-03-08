var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n;
let fib;

function readLine(line) {
  if (line !== "\n") {
    n = parseInt(line.toString());
  }

  fib = memoize(fibonacci);
  console.log(fib(n));
  process.exit();
}

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
};
