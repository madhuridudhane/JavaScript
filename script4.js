let x = 10
let y = 20

if (x > y) {
     console.log("x is greater")
}
else {
     console.log("y is greater")
}

x > y ? console.log("x is greater") : console.log("y is greater")

let age = 18
let a1 = age >= 18 ? ("can drive") : ("can not drive")
console.log(a1)

let city = "pune"
switch (city) {
     case "pune":
          console.log("MH")
     case "shimala":
          console.log("HP")
     case "chennai":
          console.log("TN")
     default:
          console.log("No city")
}

city2 = "as"
switch (city2) {
     case "Tiruanantpuram":
          console.log("kerala")
          break
     case "Tirupati":
          console.log("AP")
          break
     case "Hydrabad":
          console.log("Telangana")
          break
     default:
          console.log("invalid input")
}

let state = "UP"
switch (state) {
     case "UP":
     case "MH":
          console.log("India")
          break
     case "Newyork":
     case "sentfrancico":
          console.log("USA")
          break
     default:
          console.log("invalid")
}

let x1=10
let x2=20
let x3=30
let isGreater=true

switch(isGreater){
     case x1>x2 && x1>x3:
          console.log("x1 is greater")
          break
     case x2>x1 && x2>x3:
          console.log("x2 is greater")  
          break
     default:
          console.log("x3 is greater")
                  
}