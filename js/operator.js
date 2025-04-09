const n = 1;
const b = true;
const nb = n + b;
console.log("🚀 ~ nb:", nb);

console.log("------------");

const nil = null;
const nil2 = [];
const n_nil = n + nil;
console.log("🚀 ~ n_nil:", n_nil);
const n_nil2 = n + nil2;
console.log("🚀 ~ n_nil2:", n_nil2);

console.log("----------");
const undef = undefined;
const n_undef = n + undef;
console.log("🚀 ~ n_undef:", n_undef);
console.log("+'' =", +"");
console.log("+undefined =", +undefined);

console.log("----------");
let x = 5;
console.log(3 - -x);
console.log(10 + -x * 2);
console.log(-10 * -x * -2);
console.log((-10 / -x) * -2);
console.log(2 ** (3 ** 2));
console.log(x, x++, x, ++x);

console.log("-------------");
let aa = 1;
let bb = 2;
let cc = (aa++, bb++);
let dd = (aa--, bb + aa);
console.log(aa, bb, cc, dd);

console.log("-------------");
switch (dd) {
  case 1:
    console.log("one");
    break;
  case 4:
    console.log("four");
    break;
  default:
    console.log("****");
}
