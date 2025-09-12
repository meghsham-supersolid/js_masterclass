let num = 1221;

let numArr = [...num.toString()].reverse();
let reversedNumber = new Number(numArr.join(""));

if (num==reversedNumber){
    console.log("Is Palindrome");
}else{
    console.log("Is not palindrome");
}