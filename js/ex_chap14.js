const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

console.log('------- page 193 -------')

const rl = readline.createInterface({ input, output });

const gener = add();
const {value} = gener.next();
console.log("🚀 ~ x:", value)

rl.on('line', answer => {
    console.log('line.answer>>', answer);
    if (answer === 'bye') rl.close();
    const {value, done} = gener.next(+answer);
    
    if (done) {
        console.log('Total = ', value)
        rl.close();
    } else{
        console.log(value);
    }
  }).on('close', () => {
    process.exit();
  });

function* add() {
    const a = yield 'first number?'
    const b = yield 'second number?'

    return a+b
}

/*
const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);
*/
//console.log('')
//console.log('------- page 194 -------')