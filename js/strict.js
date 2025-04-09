//'use strict'

f = 1;
NaN = 1;
Infinity = 0;
function f(a, a) {
  console.log("outer f", a);
}
delete f; // error
{
  f(100);
  function f(a) {
    console.log("block f", a);
  }
}
f(200);

const x = 1;
function printX() {
  console.log(x);
}

function set100() {
  const x = 100;
  printX();
}

set100();
