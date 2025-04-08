var x
var y
x=100
y=200
function add(a,b) {
    return a+b
}

let zz
console.log("1 : ", zz);

zz=9;
console.log("2 : ", zz)
console.log(globalThis['zz'])

const u = {id: 1, name: 'Hong', age: 29};
console.log(u)

let {id, name, addr} = u;
console.log(id)
console.log(name)
console.log(addr)

console.log('---------------')
const user = { id: 1, name: 'Hong', addr: { city: 'Seoul', road: '길' } };
console.log(user.addr.city)

let [ a, b ] = [ 1, 2 ];
[ b, a ] = [ a, b ];
console.log(a,b)

const { id2, name2, addr2 = 'Seoul' } = { id2: 1, name2: 'Hong' };
console.log(id2, name2, addr2)

console.log('--------------')
arr=[1,2,3,4,5]
objx={...arr}
console.log(objx)

user2={id:1, name:'hong'}
const user3 = {...user2, addr:'seoul'}
console.log(user3)
console.log('----------------')
const u3 = {id:3, name: 'kim', addr: {id: 1, city: 'Seoul'}};
let {id: idd, addr: {id: aid}} = u3;
console.log(idd, aid)
const arr2 = [1, 2, [3,4], [5,6], {ax: 7, ay: 8}, {ax: 9}];
const [, x2, [,y2], z2,  , {ax}] = arr2;
console.log(ax)