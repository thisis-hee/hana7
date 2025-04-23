function add(a: number, b: number) {
  return a + b;
}

const s: string = "abc";

const add2 = (a: number, b: number): number => a + b;
const add3 = (a: number, b: number) => a + b;

const introduce = (name: string, height?: number) => {
  console.log(`이름 : ${name}`);
  if (height) console.log(`키 : ${height + 10}`);
  //Error : 'height' is possibly 'undefined'.
};

introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 170); // OK

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const afactorial = (n: number) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const af = (n: number): number => (n <= 1 ? n : n * af(n - 1));

console.log("factorial :", factorial(5));
console.log("afactorial :", afactorial(5));
console.log("af :", af(5));

const arr3 = [1, 2, 3];
console.log(arr3.map((a, i) => a + i));

const t = setTimeout(console.log, 1000, "1");

const a: number[] = [1, 2, 3];
a[100]?.toFixed();

const b = [4, 5, "6"];

const c = [...a, ...b];

//const d=a.concat(b)

interface SomeInterface {
  [key: string]: number | undefined;
}

let is: SomeInterface = {
  one: 1,
  two: 2,
};

is["four"]?.toFixed(2);
is["one"]?.toFixed(2);

type IS = {
  [k: string]: string | number;
};

let isobj1: IS = { id: 1, name: "Hong", 3: 5 }; // string에 number는 됨. Key는 내부적으로 string이라 가능

type IS2 = {
  [k: number]: string | number;
};

// let isobj2: IS2 = {id:1, name:'Hong', 3:5} // number에 string은 안됨

const sym1: symbol = Symbol("s1");
let isobj2: IS = { id: "1", name: "Hong", 3: 5, [sym1]: false };

type A = {
  name: string;
  age: number;
};

type B = {
  name: string;
  addr: string;
};

const onlyA: A[] = [
  { name: "lim", age: 10 },
  { name: "hong", age: 20 },
];
const onlyB: B[] = [
  { name: "jang", addr: "Seoul" },
  { name: "park", addr: "Busan" },
];
const aOrB = [...onlyA, ...onlyB]; // (A|B)[]

let abx: A | B = {
  name: "Tan",
  age: 30,
  addr: "Inchon",
};

const abobj = {
  name: "Tan",
  age: 30,
  addr: "Inchon",
  x: 1,
};

aOrB.push({
  name: "Tan",
  age: 30,
  addr: "Incheon",
});

aOrB.push(abobj);
let aOrB2: [A | B] = [abobj];

{
  type A = { name: string; addr: string };
  const blockA: A = { name: "Hong", addr: "busan" };

  console.log("🚀 ~ blockA:", blockA);
}

function tuple() {
  const a: [number, string, boolean] = [1, "lim", false];

  let b: [number, string] = [a[0], a[1]];
  console.log("🚀 ~ tuple ~ b:", b);
}

tuple();

const greeting = (greet: "Hi" | "Hello", name: string, age: number) => {
  console.log(`${greet}~! ${name} (${age})`);
};

greeting("Hi", 'Hong', 33)

const tup: [string, number] = ['Kim', 55]
const ary = ['Park', 44]

greeting("Hello", ...tup)
//greeting("Hello", ...ary)