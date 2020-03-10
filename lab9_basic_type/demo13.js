var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
var a2 = Array.from('abcdefg')
var a3 = 'abcdefg'.split('')
console.log(a1, a2, a3)
// Array(7) ["a", "b", "c", "d", "e", "f", "g"]
// Array(7) ["a", "b", "c", "d", "e", "f", "g"]
// Array(7) ["a", "b", "c", "d", "e", "f", "g"]

console.log(Array.isArray(a1),Array.isArray(a2),Array.isArray(a3))
// true true true

var a4 = new Array()
a4.push('a')
a4.push('b')
a4.push('c')
a4.push('d')
console.log(a4, Array.isArray(a4))
// Array(4) ["a", "b", "c", "d"]
// true

// // push, pop
console.log(a1.pop(), a1)
// g
// Array(6) ["a", "b", "c", "d", "e", "f"]
a1.push('G')
console.log(a1)
// Array(7) ["a", "b", "c", "d", "e", "f", "G"]
console.log(a2.shift(), a2)
a2.unshift('A')
console.log(a2)