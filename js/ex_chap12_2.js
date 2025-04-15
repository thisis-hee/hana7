const assert = require("assert");

console.log("-------- page 159 --------");

const arr = [1, 2, 3, 4];

function push(array, ...args) {
  return [...array, ...args];
}
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);

const pop = (array, cnt) => (cnt ? array.slice(-cnt) : array.at(-1));
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!

const unshift = (array, ...args) => [...args, ...array];
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

const shift = (array, count = 1) => [array.slice(0, count), array.slice(count)];
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift

assert.deepStrictEqual(arr, [1, 2, 3, 4]);

console.log("-------- page 160 --------");

const arr2 = [1, 2, 3, 4];
const deleteArray = (array, startOrKey, endOrValue) => {
  if (typeof startOrKey === "string") {
    return array.filter((a) => a[startOrKey] !== endOrValue);
  } else {
    return array.filter((_, i) => i < startOrKey || i >= endOrValue);
  }
};
assert.deepStrictEqual(deleteArray(arr2, 2), [1, 2]); // 2부터 끝까지 지우고 나머지 리턴
assert.deepStrictEqual(deleteArray(arr2, 1, 3), [1, 4]); // 1부터 3미만까지 지우고 나머지 리턴
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);

