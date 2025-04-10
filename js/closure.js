console.log("-------------------");
function discount() {
  const dcRate = 0.1;
  return function (price) {
    return price * dcRate;
  };
}

const items = [
  { item: "상품 A", price: 32000 },
  { item: "상품 B", price: 45000 },
];
const dc = discount(0.5);
for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - dc(orgPrice);
  console.log(`${item}: ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
}

console.log("-------------------");

const DC_RATE = 0.5;
function discount2() {
  const dcRate = 0.5;
  return function (price) {
    return price * dcRate;
  };
}

const discount3 = () => (price) => price * DC_RATE;

// curring
const MENU = { chinese: ["짜장", "짬뽕"], italian: ["피자", "파스타"] };

function restaurant(kind) {
  const menu = MENU[kind];
  return function (foodIdx) {
    return menu[foodIdx];
  };
}

const lunch = restaurant("chinese");
console.log(lunch(1));

const dinner = restaurant("italian");
console.log(dinner(0));
console.log("-------------------");

// 출입자 수를 게이트별로 구하는 함수
function counter() {
  let currCount = 0;
  return {
    plus() {
      currCount += 1;
    },
    minus() {
      currCount -= 1;
    },
    getCount() {
      return currCount;
    },
    count: () => currCount,
  };
}

class Counter2 {
  #currCount = 0;
  plus() {
    this.#currCount += 1;
  }
}

const gate1 = counter();
const gate2 = counter();

gate1.plus();
gate1.plus();
gate1.plus();
gate1.plus();
gate2.plus();
gate2.plus();
gate2.plus();
gate1.minus();
gate2.minus();

console.log("gate1>>", gate1.getCount());
console.log("gate1>>", gate1.count());
console.log("gate2>>", gate2.getCount());
console.log("gate2>>", gate2.count());
console.log("-------------------");

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

const f3 = factorial(3);
console.log("🚀 ~ f3:", f3);

const f5 = factorial(5);
console.log("🚀 ~ f5:", f5);

let n = 3;
let result = 1;
for (let i = n; i > 0; i--) {
  result *= i;
}
console.log("🚀 ~ result:", result);
console.log("-------------------");

function factorialTCO(n, acc = 1) {
  if (n === 1) return acc;
  return factorialTCO(n - 1, n * acc);
}

const ftco3 = factorialTCO(3);
console.log("🚀 ~ ftco3:", ftco3);
console.log("-------------------");

function makeArray(n) {
  if (n === 1) return [1];
  return [...makeArray(n - 1), n];
}

console.log(makeArray(10));
console.log("-------------------");

function makeReverseArray(n) {
  if (n === 1) return [1];
  return [n, ...makeReverseArray(n - 1)];
}
console.log(makeReverseArray(5));
console.log("-------------------");

function makeArrayTCO(n, acc = []) {
  if (n === 1) return [1, ...acc];
  return makeArrayTCO(n - 1, [n, ...acc]);
}
console.log(makeArrayTCO(5));
console.log("-------------------");