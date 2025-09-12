let startingNaturalNumber = 1;
let n = 10

if (startingNaturalNumber<1){
    startingNaturalNumber = 1;
}
let sum = 0;
for (let index = startingNaturalNumber; index <startingNaturalNumber + n; index++){
    sum+=index;
}

console.log(`Sum ${n} natural numbers starting from ${startingNaturalNumber} to ${startingNaturalNumber + n-1} is ${sum}`);
