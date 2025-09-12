let num = 123456;
let numArr = [...num.toString()].reverse();
console.log( new Number(numArr.join(""))+0 );
