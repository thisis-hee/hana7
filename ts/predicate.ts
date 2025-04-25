const isStringNumber = (value: unknown): value is [string, number] =>
  Array.isArray(value) &&
  typeof value[0] === "string" &&
  typeof value[1] === "number";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

f1(["Hong", 12345]);

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  name: string;
  constructor(name: string = "Maxx") {
    this.name = name;
  }
}

function isDog(a: Animal): a is Dog {
  return "name" in a && typeof a.name === "string";
}

if (isDog(Retriever)) {
  console.log(Retriever.name);
}

const maxx: Dog = { name: "Maxx" };
if (isDog(maxx)) console.log(maxx.name, "is Dog!");

// ---------------------------------

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type ConstCart = typeof constCart;
type T4 = ConstCart[keyof ConstCart];

// --------------------------------

interface IErrorWithMessage {
  message: string;
}

const isErrorWithMessage = (error: unknown): error is IErrorWithMessage =>
  typeof error === "object" &&
  error !== null &&
  "message" in error &&
  typeof error.message === "string";
// (error as Record<string, unknown>).message === 'string'

const toErrorWithMessage = (error: unknown) =>
  isErrorWithMessage(error) ? error : new Error(JSON.stringify(error));

try {
  // throw new Error('some error!!!!');   // 가
  // throw 'some string error!!!';        // 나
  throw ["some", "array", "error"]; // 다
} catch (error) {
  console.log(toErrorWithMessage(error).message); // (라)
}

export {}