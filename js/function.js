globalThis.name = "GlobalName";
this.name = "ModuleName";

function f() {
  console.log("f.this=", this.name);
}
f();

const af = () => {
  console.log("af.this=", this.name);
};
af();


const obj = {
  name: "ObjName",
  bark() {
    console.log("bark=", this.name);
  },
  bark2: () => console.log("bark2=", this.name),
};

obj.bark();
obj.bark2();
console.log('-----------')

const expressFn = function(name) {
    'use strict';
    if(this?.name){
        this.name = name;
    }
    console.log(new.target, this?.name, name);
}
expressFn('expfn');

const arrowFn = (name) => {
    this.name = name;
    console.log(this, new.target, this.name, name);
}

expressFn('expfn');
expressFn.bind({})('expfn')
//arrowFn('afn');

const dfn = new expressFn('D');
//const afn = new arrowFn('A');

console.log('------------------')
const Dog = function(name) {
    console.log(this, new.target, 
                this instanceof Dog);
    this.name = name;
    this.bark = function () {
      console.log('bark=', new.target, this.name, name);
    };
    this.bark2 = () =>
      console.log('bark2=', new.target, this.name, name);
}
  
const dog = Dog('Doggy');
const lucy = new Dog('Lucy');
lucy.bark();
lucy.bark2();
console.log('dog type=', typeof dog);
console.log('lucy type=', typeof lucy);
console.log('----------------')

const Cat = (name) => {
    console.log(this, new.target);
    this.name = name;
    this.bark = function () {
    console.log('bark=', new.target, this.name, name);
    };
    this.bark2 = () =>
      console.log('bark2=', new.target, this.name, name);
  
    return this;
  }
  
  const cat = Cat('Coco');
  // const cat = new Cat(''); // error!!
  cat.bark(); // ?
  cat.bark2(); // ?
  cat.bark(); // ?
  console.log('type=', typeof cat);
  
console.log('------------')
globalThis.name = 'Global Name';

const obj2 = {
    name: 'Obj Name',
    printName() {
        console.log(this.name);
    },
};

const printName = obj2.printName;
printName();

console.log('-------------')
const hong = {id: 1, name: 'Hong'};
const kim = {id: 2, name: 'Kim'};

expressFn.bind(hong)('expfn')
expressFn.call(hong, 'expfn')
expressFn.apply(hong, ['expfn'])

console.log('-------------')

const debounce = (cb, delay) => {
    let timer;
    return (...args) =>{
        if (timer) clearTimeout(timer)
        timer = setTimeout(cb, delay, ...args)
    }
}

const throttle = (cb, delay) => {
    let timer;
    return (...args) => {
        if(timer) return;
        timer=setTimeout(cb, delay, ...args)
        timer=null;
    }
}

console.log('-----------')
const farr = [1,2,3,4]
const rets = farr.map((a,i) => console.log(a,i,a*i))
console.log("🚀 ~ rets:", rets)

const roots = farr.map(Math.sqrt)
console.log("🚀 ~ roots:", roots)

const unary = f => f.length===1 ? f : (args) => f(args);

const sarr=['11','22','33','44','55']
const sresults = sarr.map(parseInt)
console.log("🚀 ~ sresults:", sresults)
const sresults2 = sarr.map(unary(parseInt));
console.log("🚀 ~ sresults2:", sresults2)
