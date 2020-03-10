function foo() {
    console.log('inside foo begin:', current)
    var current = 300;
    implyGlobal = 500;
    console.log('inside foo after:', current)
    console.log('inside foo, implyglobal=', implyGlobal)
}

foo()
//console.log(current)
// exeception,current is declare in function

console.log(implyGlobal)
// success
implyGlobal += 300
// success
console.log(implyGlobal)