var elements = [0, "", NaN, null, undefined]

console.log("### method1 ###")
elements.forEach(evaluate)
function evaluate(value, index, array) {
    if (value) {
        console.log(index, value, "return true")
    } else {
        console.log(index, value, "return false")
    }
}
console.log(typeof evaluate)

console.log("### method2 ###")
elements.forEach((value, index, array) => {
    if (value) {
        console.log(index, value, "return true")
    } else {
        console.log(index, value, "return false")
    }
})


