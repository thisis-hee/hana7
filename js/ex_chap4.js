// ex1
for(let i = 1; i <= 10; i = i + 1){
    console.log(i/10);
}
console.log("------------------")
for(let i = 0.1; i < 1; i = i + 0.1){
    console.log(+i.toFixed(1));
}
console.log("------------------")

// ex2
for(let i = 1; i<=10; i++){
    const root = Math.sqrt(i);
    // 정수가 아닌 경우만 출력하도록 조건문 설정
    if(root%1!=0){
        console.log(i, root.toFixed(3))
    }
}
console.log("------------------")

// ex3
const today = new Date().getDay();
console.log("🚀 ~ today:", today)
// getDay의 값과 WEEK_NAMES의 인덱스 활용
const WEEK_NAMES = '일월화수목금토'
console.log(`오늘은 ${WEEK_NAMES[today]}요일 입니다.`)
console.log("------------------")

// ex4
function plength(n){
    const str = n.toString();
    // 소수점이 있는 경우에만 자릿수를 계산하도록 함
    const dotIndex = str.indexOf(".");
    if (dotIndex === -1) return 0;
    return str.length - dotIndex - 1;
}

function addPoints(a,b){
    const alen=plength(a)
    const blen=plength(b)
    console.log((a+b).toFixed(alen>blen?alen:blen))

}

addPoints(0.21354, 0.1)
addPoints(0.14, 0.28)
addPoints(0.34, 0.226)
addPoints(10.34, 200.226)
addPoints(0.143, -10.28)
addPoints(0.143, -10)
// 정수 간 연산
addPoints(10,20)
console.log("------------------")

function addPoints2(...args){
    p=10**10
    let ret=0;
    for(const n of args){
        ret+=Math.trunc(n*p)
    }
    ret=ret/p
    console.log(args.join(' + '), '=' , ret)
}
addPoints2(0.21354, 0.1, 0.2)
addPoints2(0.14, 0.28)
addPoints2(0.34, 0.226)
addPoints2(10.34, 200.226)
addPoints2(0.143, -10.28)
addPoints2(0.143, -10)
console.log("------------------")

