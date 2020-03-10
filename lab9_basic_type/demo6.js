// 0, "", NaN, null, undefined
var condition = undefined
if (condition) {
    console.log("return true")
} else {
    console.log("return false")
}

var elements = [0, "", NaN, null, undefined]
console.log("type of elements:", typeof elements, Array.isArray(elements))