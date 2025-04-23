type Xid = { id: number };
type Xname = { name: string };
type Xage = { age: number };
type X = Xname | Xage;
type Y = Xname & Xage;
type Z = string & number;

type P = Xid | (Xname & Xage);
type Q = Xid & (Xname | Xage);

let xx: X = { name: "Hong" };
xx = { age: 33 };

let yy: Y = { name: "Hong", age: 33 };
let pp: P = { id: 33, name: "hong", age: 10 };

let qq: Q = { id: 1, name: "Hong" };
qq = { id: 2, age: 33 };

console.log("🚀 ~ qq:", qq);

// -----------------------------

interface CallSignature {
  (input: string): number; // call signa..
  count: 0; // cf. count: number
  greeting: (name: string) => void;
}

const typedCallSignature: CallSignature = (input) => input.length;

typedCallSignature.count = 0;
typedCallSignature.greeting = (name) => console.log(`Hi, ${name}`);

interface CC {
    id: number;
}

interface CC {
    name: string;
}

// OK
let cc: CC = {id: 1, name: 'Hong'};
console.log("🚀 ~ cc:", cc)
