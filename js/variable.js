const n=123;   // 8byte
const bi=123n; // 16byte

const n___bi1 = n === bi; // === : 메모리의 크기와 값 비교
const n___bi2 = n == bi;
console.log("🚀 ~ n_bi1:", n___bi1)
console.log("🚀 ~ n_bi1:", n___bi2)

const nAddbi = n+Number(bi);
console.log("🚀 ~ nAddbi:", nAddbi, typeof nAddbi)

const nAddbi2 = BigInt(n)+bi;
console.log("🚀 ~ nAddbi:", nAddbi, typeof nAddbi2)

const s='abc';
const ss=new String('abc');
const s__ss = s==ss;
console.log("🚀 ~ s__ss:", s__ss, typeof s__ss)
const s__ss2 = s===ss;
console.log("🚀 ~ s__ss2:", s__ss2, typeof s__ss2)

const sNum=Number(s);
console.log("🚀 ~ sNum:", sNum)
const ssNum=Number(ss);
console.log("Number(s) == Number(ss)", Number(s)==Number(ss), isNaN(sNum))

const sss = `${s}-${n+Number(bi)}`;
console.log("🚀 ~ sss:", sss, typeof(sss))

const sym = Symbol("foo")
const sym2 = Symbol("foo")
const sym_sym2= sym==sym2
console.log("🚀 ~ sym_sym2:", sym_sym2)

const seoul=Symbol.for('H')
const busan=Symbol.for('H')

const s__p=seoul==busan
console.log("🚀 ~ s__p:", s__p)

const undef = undefined;
const nil = null;

const undef__nil = undef==nil
console.log("🚀 ~ undef__nil:", undef__nil)
const undef___nil = undef===nil
console.log("🚀 ~ undef___nil:", undef___nil)

console.log("-----------------")

const hong = {id:1, name:'hong'}
let kim = {id:Symbol(),name:'kim'}
console.log(hong==kim)
kim=hong;
console.log(hong==kim)
console.log(hong===kim)

console.log("-----------------")
const o1 = new Object();
const o2 = {};
console.log(o1==o2);
console.log(o1===o2);

console.log("-----------------")
const nStr=n.toString();
console.log("🚀 ~ nStr:", nStr, typeof nStr)
const nStr2=new Number(n).toString();
console.log("🚀 ~ nStr2:", nStr2, typeof nStr2, typeof n)

console.log("----------")
const nStr16=n.toString(16)
console.log("🚀 ~ nStr16:", nStr16)

const nStr16d=parseInt(nStr,16);
console.log("🚀 ~ nStr16:", nStr16)

console.log("---------")
const d1 = Date();
const d2 = new Date();
console.log(d1)
console.log(d2)
console.log(d1===d2)

console.log("----------")


