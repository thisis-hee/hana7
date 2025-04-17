const assert = require("assert");

console.log("----- 232 -----");

const total = { price: 45000, vat: 4500 };

function fmt(txts, value) {
  return `${txts[0]}${value.toLocaleString().padStart(9)}${txts[1]}`;
}

console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

console.log("----- 232 ex 1-----");

const upperToLower = (str) =>
  str.replace(/[A-Z]/g, (foundStr) => foundStr.toLowerCase());
const low = upperToLower("Senior Coding Learning JS");
console.log("🚀 ~ low:", low);

/*
const swapCase = (str) =>
  str.replace(/[a-zA-Z]/g, (char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  );
*/

const swapCase = (str) =>
  str?.replace(/([A-Z\s]*)([a-z]*)/g, (foundStr, upper, lower) => {
    // if (!foundStr?.trim()) return '';
    return `${upper.toLowerCase()}${lower.toUpperCase()}`;
  });

console.log(swapCase("Senior abc Coding Learning JS"));

assert.equal(
  swapCase("Senior Coding Learning JS"),
  "sENIOR cODING lEARNING js"
);
assert.equal(swapCase("Hanaro 7 Class"), "hANARO 7 cLASS");

console.log("----- 232 ex 2-----");

const telfmt = telno => {
    const len = telno?.length ?? 0;
    if (len <= 7) return telno;
  
    if (len === 8) return `${telno.substring(0, 4)}-${telno.substring(4)}`;
  
    let a = telno.startsWith('02') ? 2 : len > 10 ? len - 8 : 3;
    let b = len - a - 4;
    const reg = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{4})`);
    return telno.replace(reg, '$1-$2-$3');
  };

assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");