let nthTerm = 10;
let first = 0;
let second = 1;

let febo =[first, second]
for (let i= 3; i<=nthTerm; i++){
    let n = first+second;
   febo.push(n)
    first =second;
    second= n;
}

console.log(febo);
