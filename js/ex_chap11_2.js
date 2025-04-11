console.log("#1 ----------------");

const once = (f) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    console.log("****", this);
    return f.bind(this)(...args);
  };
};

function fivePart(x, y) {
  return `fivePart ${x}, ${y}, id: ${this.id}`;
}

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6));
console.log(fn(2, 7));
console.log(fn(3, 8));

const fn2 = once(fivePart.bind({ id: 11 }));
console.log(fn2(1, 2));
const fn3 = once(fivePart);
console.log(fn3.bind({ id: 22 })(3, 4));

const onceAgain = (f, rebirthDelay) => {
  let done = false;
  return (...args) => {
    if (done) return;
    done = true;
    setTimeout(() => (done = !done), rebirthDelay);
    return f(...args);
  };
};

const fn1sec = onceAgain(fivePart, 5000);
let cnt = 0;
/*
const cb = () => console.log(`${cnt}초`, fn1sec(++cnt,0.1));
setInterval(cb, 1000)
*/

console.log("#2 ----------------");

const before = () => console.log("before....");
const after = (result) => console.log("after...", result);

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) =>
  `${id}/${nickname}/${email}/${level}`;

const template = (f) => {
  return (...args) => {
    before();
    const result = f(...args);
    //setTimeout(() => after(result), 0);
    process.nextTick(after, result);
    return result;
  };
};

const temp = template(someFn);
const temp2 = template(someFn2);
/*
console.log("temp1>> ", temp("sico", "hello"));
console.log("temp2>> ", temp2(1, "sico", "sico@gmail.com", 5));
*/
console.log("#3 ----------------");

const getNextWeek = (() => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  let widx = -1;
  return () => {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();
/*
let cntx = 0;
const intl = setInterval(() => {
  console.log("call", cntx, getNextWeek());
  if ((cnt += 1) === 7) clearInterval(intl);
}, 1000);
*/
console.log("# Think Together 1----------------");
function getDiffMillis(dt1, dt2) {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);

  const { getTime: getTime1 } = d1;
  const { getTime: getTime2 } = d2;
  return getTime1() - getTime2();
}
getDiffMillis("2021-01-01", "2021-01-02");
