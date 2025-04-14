const assert=require('assert');
const arr2 = [1, 2, 3, 4, 5];

console.log("-------------- ex1 --------------");

const a1 = arr2.slice(1, 3);
console.log("🚀 ~ a1:", a1);

console.log("-------------- ex2 --------------");

const a2 = arr2.slice(2);
console.log("🚀 ~ a2:", a2);

console.log("-------------- ex3 --------------");

const a3 = arr2.splice(1, 3);
console.log("🚀 ~ a3:", a3);

console.log("-------------- ex4 --------------");

arr2.splice(1, 0, ...a3);
console.log("🚀 ~ arr2:", arr2);

console.log("-------------- ex5 --------------");

const d5 = arr2.splice(2);
console.log("🚀 ~ arr2:", arr2);

console.log("-------------- ex6 --------------");

arr2.splice(2, 0, ...d5);
console.log("🚀 ~ arr2:", arr2);

console.log("-------------- ex7 --------------");

arr2.splice(2, Infinity, "X", "Y", "Z", 4, 5);
console.log("🚀 ~ arr2:", arr2);
arr2.splice(2, 3, 3) // 원위치
arr2.splice(2,1,'X','Y','Z')
console.log("🚀 ~ arr2:", arr2)

console.log("-------------- ex8 --------------");

arr2.splice(2,3,3)
const a8 = [...arr2.slice(0,2),'X','Y','Z', ...arr2.slice(-2)]
console.log("🚀 ~ a8:", a8)
assert.deepStrictEqual(a8, [1,2,'X','Y','Z',4,5])


