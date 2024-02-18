let names = ["madhuri", "ananya", "namaswi", "nanda"]
console.log(names[0])
console.log(names.length)
console.log(names)
for (let i = 0; i < names.length; i++) {
     //console.log(names)
     //console.log(names[i])
     console.log(i)
}

let cities = ["Solapur", "Pune", "Mumbai", "Chennai"]
for (let i = 0; i <= cities.length; i++) {
     if (cities[i] == "Mumbai") {
          break
     }
     console.log(cities[i])

}

let fruits = ["mango", "apple", "guava", "chikko"]
for (let i = fruits.length - 1; i >= 0; i--) {
     console.log(fruits[i])
     if (fruits[i] == "apple") {
          break
     }
     //console.log(fruits[i])
}

let Animals=["cat","dog","tiger","lion"]
for(let i=0;i<Animals.length;i++){
     if(Animals[i]=="dog"){
          continue
     }
     console.log(Animals[i])
}

let countries=["India","Nepal","USA","Bhutan"]
// console.log(countries)
// console.log(countries.length)
let i=0
while(i<countries.length){
     console.log(countries[i])
     i++
}

