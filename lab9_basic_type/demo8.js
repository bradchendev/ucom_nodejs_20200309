console.log("I have " + 1 + 2 + " computers")
console.log(1 + 2 + " computers are mine")
console.log("Sunday".indexOf("day"))
console.log("Sunday".indexOf("DAY"))
console.log("Sunday".substr(3,3))
console.log("Sunday".slice(3,6))


// Array
// x1[4],x1[5] just return undefined 
var x1 = "Sunday,Monday,Tuesday,Wednesday".split(",")
console.log(typeof x1,Array.isArray(x1), x1)
console.log(x1[0],x1[1],x1[2],x1[3],x1[4],x1[5])
console.log(x1[-1],x1[-5], x1[100])


// removes whitespace from both ends of a string
var y1 = "\t\n\r\t    abc def ghi   \t\n"
console.log(y1)
console.log(y1.trim())