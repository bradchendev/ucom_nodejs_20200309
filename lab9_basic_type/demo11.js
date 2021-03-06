var x1 = {name:'Mark Ho',role:'engineer',grade:6}
var j1 = JSON.stringify(x1)
var x2 = ['Sunday','Monday','Tuesday']
var j2 = JSON.stringify(x2)
console.log(typeof x1, typeof j1, typeof x2, typeof j2)
// object string object string

console.log(x1, j1)
// object {name: "Mark Ho", role: "engineer", grade: 6}
// {"name":"Mark Ho","role":"engineer","grade":6}
console.log(x2, j2)
// Array(3) ["Sunday", "Monday", "Tuesday"]
// ["Sunday","Monday","Tuesday"]

var o1 = JSON.parse(j1)
var o2 = JSON.parse(j2)
console.log(Array.isArray(o1), typeof o1, o1)
console.log(Array.isArray(o2), typeof o2, o2)
// false object
// Object {name: "Mark Ho", role: "engineer", grade: 6}
// No debug adapter found. Can not send 'variables'.

var temp1 = '{"name":"Mark Ho","role":"engineer","grade":6}'
var o1 = JSON.parse(temp1)
console.log(typeof temp1, typeof o1)
// string object