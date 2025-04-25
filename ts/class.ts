class WithMethod {
  myMethod() {}
}

const isSame = new WithMethod().myMethod === new WithMethod().myMethod;
console.log("🚀 ~ isSame:", isSame);

// -------------------------------------

class WithProperty {
  myProperty!: () => void; // Type 정의
}
console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true??? false!

const instance = new WithProperty();
//instance.myProperty();  // OK?

class WithProperty2 {
  myProperty: () => void; // call signature
  constructor() {
    this.myProperty = () => {
      console.log("Hello, this is myProperty!");
    };
  }
}
const instance2 = new WithProperty2();
instance2.myProperty();

// ------------------------------

class Lesson {
  subject: string;

  constructor(subject: string) {
    this.subject = subject;
  }
}

class OnlineLesson extends Lesson {
  url: string;

  constructor(subject: string, url: string) {
    super(subject);
    this.url = url;
    this.subject = "";
  }
}

// ------------------------------

class Animal {
  constructor(public name: string, public mouse: string = "x") {
    this.mouse = mouse;
  }

  feed(food: string): this {
    this.mouse = food;
    console.log(food, "feed to", this.name);
    return this;
  }

  print() {
    console.log("MyName is", this.name);
  }
}

class Dog extends Animal {
  print() {
    console.log("Dong Name is", this.name);
  }
}
class Cat extends Animal {
  print() {
    console.log(this.constructor.name, "Name is", this.name);
  }
}

const maxx: Dog = new Dog("Maxx");
const navi: Cat = new Cat("Navi");

let animal: Animal = maxx;
animal.feed("banana").print();

animal = navi;
animal.feed("fish");

export {};

// -----------------------------------

const isString = (value: unknown) => typeof value === "string";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
};
