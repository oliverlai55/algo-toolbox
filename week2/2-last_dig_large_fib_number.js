var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n;
let fib;
let lastFib;

function readLine(line) {
  if (line !== "\n") {

    n = parseInt(line.toString());

    if (n > 60) {
      n = n % 60;
    }
  }

  fib = memoize(fibonacci);
  console.log(fib(n));
  process.exit();
}

function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  lastFib = (fib(n - 1) + fib(n - 2)) % 10;

  return lastFib;

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
