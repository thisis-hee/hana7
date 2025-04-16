const hong = { id: 1, name: "Hong" };
const m = new Map();
m.set(1, 100);
m.set(2, 200);
m.set(hong, hong.name);
m.set(2, 222);
m.delete(1);
m.set(3, undefined);
console.log(m, m.has(hong));

const keys = m.keys()
console.log("🚀 ~ keys:", keys)
