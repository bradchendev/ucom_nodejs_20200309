console.log(x2)

// console.log(x1)
// exception
// ReferenceError: x1 is not defined
// 未使用var宣告的變數，不可能在前面使用

x1 = 'hello'
var x2 = 'world'
console.log(typeof x1, typeof x2)
console.log(x1, x2)
function printMessage() {
    console.log( 'inside printmessage',x1, x2)
}
printMessage()