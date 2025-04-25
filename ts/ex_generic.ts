
import { Factory } from "./generic";
import DATA from "./data.json";
import { lee, leeX } from "lee";

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

let x: Hana7 = { id: 1, name: "hong" };
let ft: Factory<string>;
const y = leeX
let xx: lee
let xxx = DATA.USER_NAMES;
console.log("🚀 ~ xxx:", xxx);

type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};

type DeptCaptain = Change<IDept, "captain", IUser>;
// type Err = Change<IDept, "xxx", IUser>;

const dc: DeptCaptain = {
  id: 2,
  age: "1년",
  dname: "Sales",
  captain: { id: 1, name: "Hong", age: 33 },
};

//  우리가 원하는 구조
//  type ItemPrice<T, U> = {item: 'X' | 'Y' | 'Z'; price: number};

type Item = { item: string; price: number };
type ItemPrice<T, U> = {
  //item: keyof U,
  //price: number
  [k in keyof T]: k extends "item" ? keyof U : T[k]; // 정답
};

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: "X", price: 1000 },
  { item: "Y", price: 2000 },
  { item: "Z", price: 3000 },
  //{ item: 'P', price: 4000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);

//-------------------------

//type TPropertyKeyType = string | number | symbol;
//type TUser = { [key: string]: string | number };

function deleteArray<T>(
  arr: T[],
  startOrKey: number | keyof T,
  endOrValue?: number | T[keyof T]
) {
  if (typeof startOrKey === "number") {
    if (typeof endOrValue === "number") {
      return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
    }
    return arr.slice(0, startOrKey);
  }

  if (typeof startOrKey === "string") {
    return arr.filter((e) => {
      if (e && typeof e === "object") {
        return e[startOrKey] !== endOrValue;
      }
    });
  }

  return [];
}

const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr); // [1, 2, 3, 4]

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

console.log(deleteArray(users, 2)); // [Hong, Kim]
console.log(deleteArray(users, 1, 2)); // [Hong, Lee]
console.log(deleteArray(users, "id", 2)); // [Hong, Lee]
console.log(deleteArray(users, "name", "Lee")); // [Hong, Kim]

export {};
