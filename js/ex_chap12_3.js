const assert = require("assert");

console.log("-------- page 161 --------");

const arr = [1, 2, 3];
arr.push(true);

const ret1 = arr.map((a) => String(a));
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

// ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) => args.filter(Boolean).join(" "); // a => !!a
const ret2 = classNames("", "a b c", "d", "", "e");
assert.strictEqual(ret2, "a b c d e");

console.log("-------- page 162 --------");

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

const addUser = (user) => [...users, user];
assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

const removeUser = ({ id: pid }) => users.filter(({ id }) => id != pid); // u => u.id != user.id
assert.deepStrictEqual(removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

const changeUser = (from, to) =>
  users.map((user) => (user.id == from.id ? to : user));
assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

console.log("-------- page 163 --------");

const reduce = (arr, fn, initValue) => {
  let i = 0;
  let acc = initValue ?? (i++, arr[0]);
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
};

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur),
  a10.reduce((acc, cur) => acc + cur)
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

console.log("-------- page 164 --------");

const arr2 = [1, 2, 3, 4, 5];
const square = (n) => n ** 2;
const cube = (n) => n ** 3;
const sqrt = Math.sqrt;

const xr1 = arr2.map(square).map(sqrt).map(cube);
assert.deepStrictEqual(xr1, [1, 8, 27, 64, 125]);

const xr2 = arr2.map((a) =>
  [square, sqrt, cube].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr2:", xr2);
const xr3 = arr2.map((a) =>
  [cube, square, sqrt].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr3:", xr3);
const xr4 = arr2.map((a) =>
  [square, cube, (n) => n + 1].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr4:", xr4);

console.log("-------- page 165 --------");

const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];
  // if (start > end && step > 0) return [];
  // if (start < end && step < 0) return [];
  if ((start - end) * step > 0) return []; // 위 두 줄 합친거
  /*
  if (end === undefined) {
    if (start > 0) {
      end = start;
      start = 1;
    } else if (start < 0) {
      end = -1;
    } else {
      return [0];
    }
  }
  */
  if (end === undefined && start === 0) return [0];

  const t = start;
  end = end ?? (start > 0 ? ((start = 1), t) : -1);

  const results = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
  }

  return results;
};

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);

console.log("-------- page 166 --------");

const keyPair = (arr, sum) => {
    const cache = {};
    for (let i=0;i<arr.length;i++){
        const value=arr[i];
        if(cache[value]) return [cache[value],i];
        cache[sum-value]=i;
    }
}

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
keyPair([1, 3, 4, 5], 7);
keyPair([1, 4, 45, 6, 10, 8], 16);
keyPair([1, 2, 4, 3, 6], 10);
keyPair([1, 2, 3, 4, 5, 7], 9);