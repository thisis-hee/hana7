const str = "Senior Coding Learning JS";
const a = /[A-z\d]/.test(str); // ?
const b = /(A-z\d)/.test(str); // ?
const c = /(A-z\d)/.test("XA-z2"); // ?
const d = /(A-z\d)/.test("XAz2");
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);
console.log("🚀 ~ c:", c);
console.log("🚀 ~ d:", d);

const r1 = str.replace(/[A-z]/g, "*");
console.log("🚀 ~ r1:", r1);

const regexp1 = /[A-Z]/;
const regexp2 = new RegExp(/[A-Z]/, "g");

const regexp = /senior|coding/gi;
if (regexp.test('Junior Developer')) console.log('OK1');
if (regexp.test('Senior Developer')) console.log('OK2');
if (regexp.test('JS Coding')) console.log('OK3');
if (regexp.test('JavaScript Coding')) console.log('OK4');