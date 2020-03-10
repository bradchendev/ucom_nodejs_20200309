var e = "Firebase, Foo, foo, function, xyz"
console.log(e)
var e1 = "Firebase, Foo, foo, function, xyz".replace(new RegExp("[Ff]", "g"), "q")
console.log(e1)
var e2 = "Firebase, Foo, foo, function, xyz".replace(/[Ff]/g, 'q')
console.log(e2)


// 
var e2 = "Firebase, Foo, foo, function, xyz".replace(/[Ffx]/g, 'q')
console.log(e2)
// qirebase, qoo, qoo, qunction, qyz
var e2 = "Firebase, Foo, foo, function, xyz".replace(/f/g, 'q')
console.log(e2)
// Firebase, Foo, qoo, qunction, xyz

// Case-insensitive 
var e3 = "Firebase, Foo, foo, function, xyz".replace(/f/gi, 'q')
console.log(e3)


