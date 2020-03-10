
//const PROGRAM_TITLE;
const PROGRAM_TITLE="Hello WORLD";
//PROGRAM_TITLE += "Hi";
//const PROGRAM_TITLE = "Hi";
const MAX1 = 1;
let i = 100;
const CONST2 = i+1;
console.log(MAX1, i, CONST2)
i+=20
console.log(MAX1, i, CONST2)
//CONST2 += 50;
// exception, becx cannot change value

// but
const AR = [1,2,3,4,5];
console.log(AR)
AR.push(6)
console.log(AR)
// success, we can push a element into Array Const

console.log("AR2")
var AR2 = [1,2,3,4,5];
AR2.push(6)
console.log(AR2)
AR2 = ['p','q','r']
console.log(AR2)
//AR = ['P','Q','R']
console.log(AR)