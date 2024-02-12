// let a=10
// console.log(a)
// a=20
// console.log(a)
// console.log(a)

// const x=30
// console.log(x)
// x=40
// console.log(x)//TypeError: Assignment to constant variable


// var y=50
// y=90
// console.log(y)

//scope
//let and const are blocked scope
//var is function scoped

// let z=70
// {
//      let z=90
//      console.log(z)
// }
// console.log(z)

// let m=1000
// {
//      m=2000
//      console.log(m)
// }
// console.log(m)



// {
//      let z=20
// }
// console.log(z)// z is not defined

{
     let z = 20
     console.log(z)
}
//console.log(z)// z is not defined

let y = 100
{
     let y = 2000
     console.log(y)//2000
}
console.log(y)//100

let x1 = 50  //-----------global
{
     console.log(x1)//50
     x1 = 200
     console.log(x1)//200
}
console.log(x1)//200



const x2 = 300  //------global
{
     console.log(x2)  //300
}



// {
//      const x3=400
// }
// console.log(x3)  // x3 is not defined


// let r1
// console.log(r1)  //undefined

//console.log(y1)  //y1 is not defined


const k = 600
{
     console.log(k)//600
     //k=700
     // console.log(k)//Assignment to constant variable
}
console.log(k)



{
     var a = 78
}
console.log(a)//78 var is not blocked scope //var is function scope

console.log("-------------------------------")

var num = 100
console.log(num)//100
function add() {
     var num = 200
     console.log(num)//200
}
console.log(num)//100
add()
console.log(num)//100

console.log("-----------------------------")

var s1 = 100
s1 = 200
console.log(s1)

console.log("--------------------------------")

// let d1=20
// let d1=30
// console.log(d1) //error

// const a1=50
// const a1=60   //error

var g1 = 30
var g1 = 50
console.log(g1)

console.log("------------------------------------")

var n1 = 37
console.log(n1)//37
function init() {
     n1 = 350
     console.log(n1)//350
}
console.log(n1)//37
init()
console.log(n1)//350

console.log("----------------------------------")

function initOne() {
     var t1 = 999
     console.log(t1)
}
initOne()
//console.log(t1)//t1 is not defined