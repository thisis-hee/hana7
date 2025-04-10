const assert = require('assert');
// import assert from 'assert';

const arr = [100, 200, 300, 400, 500, 600, 700];

// for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
// for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
for (const k in arr) {
  console.log('🚀 k:', k, arr[k]); // arr['1']
}

const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false };

console.log('---------------------');
// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
Object.defineProperty(obj, 'level', {
  enumerable: false,
});
for (const k in obj) {
  console.log('🚀 k:', k, obj[k]);
}
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
for (const v of Object.values(obj)) {
  console.log('🚀 v:', v);
}
// 7. role 프로퍼티는 읽기전용으로 설정하시오.
Object.freeze(obj);
console.log('---------------------');

const data = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
];
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
function makeObjectFromArray(arrdata) {
  let retObj = {};
  for (const [k, ...v] of arrdata) {
    // retObj[k] = v; // backend
    retObj = { ...retObj, [k]: v }; // front-end
  }

  return retObj;
}

function makeArrayFromObject(objdata) {
  let retArr = [];
  for (const [k, v] of Object.entries(objdata)) {
    // retArr.push([k, ...v]);
    retArr = [...retArr, [k, ...v]];
  }
  return retArr;
}

assert.deepStrictEqual(makeObjectFromArray(data), {
  A: [10, 20],
  B: [30, 40],
  C: [50, 60, 70],
});

const x2 = makeArrayFromObject({ A: [10, 20], B: [30, 40], C: [50, 60, 70] });
assert.deepStrictEqual(x2, data);
console.log('🚀 x2:', x2);

console.log('===========================');
function shallowCopy(obj) {
  // return {...obj}; // 정답!!
  const ret = {};
  for (const [k, v] of Object.entries(obj)) {
    ret[k] = v;
  }
  return ret;
}

const kim = { nid: 3, nm: 'Kim', addr: 'Pusan' };
// const newKim1 = shallowCopy(kim);
// const newKim1 = Object.assign({}, kim);
const newKim1 = { ...kim };
newKim1.addr = 'Daegu';
console.log(kim.addr !== newKim1.addr); // true면 통과!
// 2) 이하 deep copy
const kim2 = {
  nid: 3,
  nm: 'Kim',
  nil: null,
  addr: { city: 'Pusan', road: 'Haeundaero', zip: null, detail: { dong: 123 } },
};

function deepCopy(obj) {
  const ret = {};
  for (const [k, v] of Object.entries(obj)) {
    // ret[k] = v !== null && typeof v === 'object' ? { ...v } : v;
    if (v !== null && typeof v === 'object') {
      ret[k] = deepCopy(v);
    } else {
      ret[k] = v;
    }
  }
  return ret;
}
const newKim2 = deepCopy(kim2);
newKim2.addr.city = 'Daegu';
newKim2.addr.detail.dong = 999;
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
console.log(kim2, 'vs', newKim2);