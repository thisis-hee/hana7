export class Factory<T> {
  protected products: T[];

  constructor(product: T) {
    this.products = [product];
  }

  create(product: T) {
    this.products.push(product);
  }
  getProducts() {
    return [...this.products];
  }
}

type Syrup =
  | { syrup: "choco"; price: 500 }
  | { syrup: "strawberry"; price: 800 };
type Topping = "java" | "cherry";
type Coffee = { menu: string; price: number };

class CoffeeFactory extends Factory<Coffee> {
  order<T>(menu: string, toppings: T[]) {
    const coffee = this.products.find(({ menu: _coffee }) => _coffee === menu);

    return coffee ? { ...coffee, additives: toppings } : null;
  }
}

const coffeeFactory = new CoffeeFactory({
  menu: "americano",
  price: 2000,
});

const myCoffee = coffeeFactory.order<Syrup | Topping>("americano", [
  { syrup: "choco", price: 500 },
  "java",
  "cherry",
]);

const myAdditionalPrice = myCoffee?.additives.reduce(
  (sum, item) => (sum += typeof item === "string" ? 0 : item.price),
  0
); // OK? Error?

const yourCoffee = coffeeFactory.order<Syrup>("americano", [
  { syrup: "choco", price: 500 },
  { syrup: "strawberry", price: 800 },
]);
const yourAdditionalPrice = yourCoffee?.additives.reduce(
  (s, c) => (s += c.price),
  0
);

//-----------------------
/*
//cf. Omit (<=> Except)
type O<T> = Omit<T, 'id' | 'age'>;
type Odept = O<IDept>; // ?

//cf. Pick  (<=> Intersect)
type P<T, K extends keyof T> = Pick<T, K>;
type Pdept = P<IDept, 'id' | 'age'>; // ?
type Pdept = P<IDept>; // ?
*/

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  user: IUser;
}

const post: Post = {
  id: 10,
  title: "post",
  content: "content",
  user: { id: 1, age: 33, name: "Hong" },
};

function get<T, K extends keyof T>(container: T, key: K) {
  return container[key];
}
const user = get<Post, "user">(post, "user");

//--------------------

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type X<T> = {
  //[k in keyof T]:T[keyof T] 중복됨
  [k in keyof T]: T[k]; //
};

type XDept = X<IDept>;

// -----------------
type XX = (string | number) & (string | boolean);
type XO = IUser & IDept;
type XO2 = { id: number } & { id: number; name: string };

const xo2: XO2 = { id: 1, name: "hong" };


export {};
