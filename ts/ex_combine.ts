interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

/*
type Combine<T, U> = {
  [k in keyof(T&U)]: k extends keyof T & keyof U ? T[k] | U[k] : k extends keyof T ? T[k] : U[k] // T의 키라서 ts가 인지를 못함
};
*/

type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};

type ICombined = Combine<IUser, IDept>;

let combineX: ICombined = {
  id: 0,
  age: 33,
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};
let combineY: ICombined = {
  id: 0,
  age: "33세",
  name: "aaa",
  dname: "bbb",
  captain: "ccc",
};

type ArrayItems<T> = T extends (infer X)[] // T extends unknown[] ? T[number] : T // '참'이라면 Item이라는 Generic Type을 선언(생성)
  ? X
  : T; // '거짓'일 때는 정확히 추론할 수 없으므로 사용하면 안됨!

type StringItem = ArrayItems<string>; // string
type StringArrayItem = ArrayItems<string[]>; // string
type NumberArrayItem = ArrayItems<number[]>; // number
type BooleanArrayItem = ArrayItems<boolean[]>; // boolean
type StringArrayItem2 = ArrayItems<Array<string>>; // string[] ⇒ string
type String2DItem = ArrayItems<string[][]>; // string[]

type Excludex<T, U> = T extends U ? never : T;
type Ee = Exclude<string | number, string>;
type Ex = Excludex<string | number | boolean, string>;

type Berry = `${string}berry`
const x1:Berry='Strawberry';
const x2:Berry='Blueberry';
const x3:Berry='Cloudberry';
const x4:Berry='Blackberry';
