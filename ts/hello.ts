const myName: string = "lee";

console.log("🚀 ~ myName:", myName);

type Name = "Hong" | "Kim" | "Lee";

type SomeType = {
  id: number;
  name: Name;
  age: number;
  address: string;
};

const something = ({ id, name, age, address }: SomeType) => {
  console.log(id, name, age, address);
};

const user: SomeType = { id: 1, name: "Hong", age: 20, address: "seoul" };
something(user);

let x: string | undefined = "str";
let y: string | number = x;

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;
type MemberGuest = Member | Guest;

let cust: Customer;
let m: Member;
let g: Guest;
let mg: MemberGuest;

cust = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};

m = cust;
mg = cust;

cust = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
  age: 26,
};

mg = cust;
// m = cust;
// g=cust;

if('age' in cust) g=cust; 
if('addr' in cust) m=cust;


