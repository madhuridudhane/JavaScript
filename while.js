i=1
while(i<=5){
     console.log(i)
     i++
}

i=5
while(i<=50){
     console.log(i)
     i=i+5
}

i=1
while(i<=3){
     console.log(i)
     if(i==2){
          break
     }
     i++
}
console.log("----------------------------")
i1=1
while(i1<=5){
     if(i1==3){
          break
     }
     console.log(i1)
     i1++
}

let i2=1
while(i2<=5){
     if(i2==3){
          i2++
          continue
     }
     console.log(i2)
     i2=i2+1
}

