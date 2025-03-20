let num = 19
let count = 0
let temp = num

while(num>0){
    num = Math.floor(num/10)
    count++
}

while(temp!==0){
     console.log(temp)
     let res = 0

         while(temp>0){
           let rem = temp%10
               res += rem**count
               temp = Math.floor(temp/10)
            }
    temp = res
    if(temp == 1){
      console.log(temp)
      console.log("happy number")
      break;
    }
}
