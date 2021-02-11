const mul = x => x * 100
const add = x => x - 5

const add2 = x => x + 3

function f2(f, x) {
  return f(f(x) * 8)
}

const n = 2
console.log(add(mul(n)))
console.log(f2(add2, n))