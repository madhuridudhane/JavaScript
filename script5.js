for (let i = 1; i <= 5; i++) {
     console.log(i)
}

for (let i = 2; i <= 20; i = i + 2) {
     console.log(i)

}

for (let i = 50; i >= 5; i = i - 5) {
     console.log(i)
}

console.log("----------------------------------")


for (let i = 3; i <= 21; i = i + 3) {
     if (i == 15) {
          break
     }
     console.log(i)
}

console.log("-----------------------------")

for (let i = 1; i <= 10; i++) {
     console.log(i)
     if (i == 5) {
          break
     }
}

console.log("--------------------------------")

for (let i = 1; i <= 5; i++) {
     if (i == 3) {
          continue
     }
     console.log(i)
}



console.log("----------------------------------------")

for (let j = 7; j <= 70; j = j + 7) {
     if (j == 35) {
          continue
     }

     console.log(j)
}

console.log("---------for-of loop---------------------")

let arr = [1, 2, 3]

for (let val of arr) {
     console.log(val)
}


console.log("-----------------for-in loop---------------")
const person = {
     name: "namaswi",
     age: 2,
     role: "student"
}
for (let key in person) {
     console.log(person[key])
}



console.log("---------------forEach on object-----------------")
Object.values(person).forEach(el => {
     console.log(el)
})



console.log("--------------forEach on arrays---------------------")
const array = [1, 2, 3]
array.forEach(function (item) {
     console.log(item)
})



console.log("---------------------------------------")
for (let i = 1; i <= 5; i++) {
     console.log(i)
     if (i == 3) {
          continue
     }

}

let name2 = ["madhuri", "namaswi", "ishu"]
name2.forEach(function (el) {
     console.log(el)
})


let info = {
     firstName: "madhuri",
     lastName: "dudhane",
     rollNo: 1
}
Object.values(info).forEach(function (el) {
     console.log(el)
})

for (let key in info) {
     console.log(info[key])
}