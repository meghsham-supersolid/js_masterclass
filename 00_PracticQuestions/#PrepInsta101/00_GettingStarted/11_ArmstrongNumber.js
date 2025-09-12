let num = 372;
let numCopy = num;

let digits = [...num.toString()].length;
let sum = 0
while (numCopy>0) {
    let digit = numCopy % 10;
    sum =  sum + Math.pow(digit,digits);
    numCopy=  Math.floor(numCopy / 10);;
}

console.log(num==sum?"Palindrome Number": "Not Paindrome Number");

