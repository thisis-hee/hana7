let loopRunCnt = 0;
function loopFibonacci(n) {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i += 1) {
    loopRunCnt++;
    // let t = prev;
    // prev = curr;
    // curr = t + curr;
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
}

console.log("🚀 ~ loopFibonacci:", loopFibonacci(5));
console.log("-------------------");

let recurRunCnt = 0;
function recurFibonacci(n) {
  recurRunCnt++;
  if (n <= 1) return n;
  return recurFibonacci(n - 2) + recurFibonacci(n - 1);
}

console.log("🚀 ~ recurFibonacci:", recurFibonacci(5));
console.log("-------------------");

function memoized(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
}

let memoRunCnt = 0;
const memoFibonacci = memoized(function (n) {
  memoRunCnt++;
  if (n <= 1) return n;
  return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});

console.log("🚀 ~ memoFibonacci:", memoFibonacci(5))