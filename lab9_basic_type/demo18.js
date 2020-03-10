var token = 'abc'
var y = function () {
    var token = 'def'
    console.log('inside', token)
}
console.log('first outside', token)
y()
console.log('second outside', token)

// function name可省略不寫
var x1 = function (x, y) {
    return x * y
}
// function也省略不寫
var x2 = (x, y) => { return x * y }
// 只reture一個值，大跨弧return也省略不寫
var x3 = (x, y) => x * y

console.log(x1(3, 4))
console.log(x2(6, 7))
console.log(x3(8, 9))

