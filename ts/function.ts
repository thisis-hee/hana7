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