let start = 0;
let end = 100;


function isPrime(num){
    for (let i =2; i<num/2;i++){
        if (num % i == 0){
            return false;
        }
    }
    console.log(`${num} is a prime number`);
}


for (let i = start; i<=end ;i++){
    isPrime(i);   
}

