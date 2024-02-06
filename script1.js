console.log("Hello")

let a=10
console.log(a)
a=20
console.log(a)

const b=30
console.log(b)
// b=40
// console.log(b)

//Arithmatic Operator
let x=10
let y=20
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x%y)
console.log(x/y)

function calculator(a,b){
     console.log(a+b)
     console.log(a-b)
     console.log(a*b)
     console.log(a/b)
     console.log(a%b)
}
calculator(40,20)

//function without parameter and without return type
function mul(){
     console.log(10*10)
}
mul()

//function with parameter and without return type
function add2(a,b){
     console.log(a+b)
}
add2(10,20)


//function with parameter and with return type
function add(x,y){
     return x+y
}
let q1=add(20,30)
console.log(q1)
console.log(q1+20)
console.log(q1-10)
console.log(q1/10)
