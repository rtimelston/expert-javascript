const numbers = [2, 3, 4, 5];
console.log(numbers);
// Square the numbers
for (let i = 0; i<numbers.length; i++) {
    numbers[i] = numbers[i]**2;
}
console.log(numbers);
console.log('window', window)
console.log('this', this) // same as window
console.log(`this === window? ${this === window}`)

// let and const do not become a property of window/this
let a = 'foo'
console.log(`let a = 'foo'`)
const b = () => {
  console.log('I am b!')
}
console.log(`let b = () => {
  console.log('I am b!')
}`)

console.log(a) // foo
b(); // I am b!

console.log(`console.log(window.a): ${window.a}`) // undefined
// console.log(`console.log(window.b()): ${window.b()}`) // window.b is not a function

// But the older var and function DO become properties if window/this
// This is what we mean by "global" scope (i.e., it belongs to the window object)
var c = 'bar'
console.log(`var c = 'bar'`)
function d() {
  return 'I am d!'
}
console.log(`function d() {
  return 'I am d!'
}`)

console.log(`console.log(window.c): ${window.c}`) // bar
console.log('console.log(window.d()): ' + window.d()) // I am d!

console.log(`console.log(this.c): ${this.c}`) // bar
console.log('console.log(this.d()): ' + this.d()) // I am d!

console.log(window)