// ex1
const user = { id: 1, name: "hong", addr: { city: "Seoul" } };

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

function f1(user) {
  const { id, name } = user;
  console.log(id, name);
}

function f2({ id, name }) {
  console.log(id, name);
}

f1(hong);
f2(hong);
f1(lee);
f2(lee);
console.log("-------------------");

// ex2
const user2 = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { passwd, ...userInfo } = user2;
console.log(userInfo);
console.log("-------------------");

// ex3
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
console.log("-------------------");

//ex4
const user3 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getUserValueExceptInitial(k) {
  const { [k]: val } = user3;
  const [a, ...result] = val;
  return result.join("");
}

console.log(getUserValueExceptInitial("name"));
console.log(getUserValueExceptInitial("passwd"));
console.log(getUserValueExceptInitial("addr"));
