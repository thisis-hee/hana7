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

type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};

type CombineExclude<T, U, E extends keyof Combine<T, U>> = {
  [k in Exclude<keyof Combine<T, U>, E>]: Combine<T, U>[k];
};
type ICombineExclude = CombineExclude<IUser, IDept, "name" | "dname">;

let combineExclude: ICombineExclude = {
  id: 0,
  age: 33,
  captain: "ccc",
};

//------------------------------------

function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>[0];

const paramObj: RegistUserObj = { name: "Hong", age: 32 };
const newUser2 = registUserObj(paramObj);
console.log("🚀  newUser2:", newUser2);

//------------------------------------

const debounce = <T extends (...args: Parameters<T>) => any>(
  cb: T,
  delay: number = 1
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = <T>(cb:(...args:T[]) => any, delay: number = 1) => {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: T[]) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

//------------------------------------

function memoized<T extends (...args: Parameters<T>)=> ReturnType<T>>(fn:T) {
    const cache: Record<string, any>= {};
    return function (...args:Parameters<T>) {
      const k = [...args].join()
      return k in cache ? cache[k] : (cache[k] = fn(...args));
    };
  }

  const memoizeAdd = memoized((a: number, b: number) => {
    return a + b;
  });
  
  console.log(memoizeAdd(1, 2)); // 3
  console.log(memoizeAdd(3, 4));

export {};
