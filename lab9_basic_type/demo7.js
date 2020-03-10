var x1 = 'pqrst'
var x2 = "pqrst"
// var x3
//var x3 = null
console.log(typeof x1, x1.length)
console.log(typeof x2, x2.length)
// console.log(typeof x3, x3.length)
// TypeError: Cannot read property 'length' of undefined

var x3 = "abcdefg1234567中文輸入也沒有問題"
// x3.forEach((v, i, a) => {
//     console.log(v)
// })
// TypeError: x3.forEach is not a function

x3.split('').forEach(e => {
    console.log("*",e)
})