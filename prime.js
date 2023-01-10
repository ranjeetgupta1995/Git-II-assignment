function checkPrime(num){
    if(num<2)return false;
    for(let i = 2;i<= Math.sqrt(num);i++){
        if(num%i==0)return false;
    }
    return true;
    
}

let ans = checkPrime(33);
console.log(ans);