const assert = require("assert");

const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

const deptMap = new Map(depts.map((dept) => [dept.id, dept]));

const empMap = new Map(emps.map((emp) => [emp.id, emp]));

const empDept = new Map(
  emps.map((emp) => {
    const tmpDept = emp.dept;
    delete emp.dept;
    return [emp, deptMap.get(tmpDept)];
  })
);

console.log(deptMap);
console.log(empMap);
console.log(empDept);

console.log(empDept.get(kim).dname);
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi

assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name }))
);
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);

assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name }))
);
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);


