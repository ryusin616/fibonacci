'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}

//N予備で最初に書いたコード
// function fib(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// const length = 40;
// for (let i = 0; i <= length; i++) {
//   console.log(fib(i));
// }

//私が書いたコード
// let x = 0;
// let y = 1;
// for (let i = 0; i < 40; i++) {
//     y = x + y;
//     x = y - x
//     console.log(y)
// }
