let num = 971
let res = 0

while(num>0){
    rem = num %10
    num = Math.floor(num/10)
    res = (res*10)+rem
}

console.log(res)