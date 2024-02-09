//comparison operator
//< , > , <= , >=
//== , !=  ----value
//=== , !==  ----value and type

console.log(7>2)
console.log(7>=2)
console.log(9<10)
console.log(9<=10)
console.log(5==5)
console.log(5!=5)
console.log(5!=3)
console.log(6===6)
console.log(6==='6')
console.log(6==='5')
console.log(9!==9)
console.log(9!=='9')
console.log(2!=='5')



// logical operator 
//&&

//  true   &&   true  -------- true 
//  false  &&   true  -------- false
//  true   &&   false  -------> false
//  false  &&   false   ------> false

console.log(2==2 && 4>3)
console.log(2==3 && 4>3)
console.log(2==2 && 4>5)
console.log(2==3 && 4>5)

// || 

// true   || true  -----> true
// false  || true  -----> true 
// true   || false -----> true
// false  || false -----> false

console.log(2==2 || 4>3) //true
console.log(2==3 || 4>3) //true
console.log(2==2 || 4>5)  //true
console.log(2==3 || 4>5)  //false