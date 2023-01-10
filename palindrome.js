checkPalindrome = (str)=>{
let rev = str.split("").reverse().join("");
if(str == rev) return true;
return false;
}

let ans = checkPalindrome("masai");
console.log(ans);