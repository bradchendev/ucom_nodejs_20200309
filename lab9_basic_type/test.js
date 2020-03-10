var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
var a2 = Array.from('abcdefg')


console.log(a1.pop(), a1)

a1.push('G')
console.log(a1)
console.log(a2.shift(), a2)
a2.unshift('A')
console.log(a2)