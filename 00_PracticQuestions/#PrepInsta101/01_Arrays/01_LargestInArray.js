//method 1
let arr2 = [9,7,22,5,3,1,6] ;
let max = arr2[0];
for (let i = 1; i <arr2.length; i++){
    if (max<arr2[i])
        max= arr2[i];
}
console.log(`Largest element in array is ${max}`);

//method 2
let arr1 = [9,7,22,5,3,1,6] ;
console.log(typeof arr1[0]);
arr1.sort((a, b) => a - b);
console.log(`Largest element in array is ${arr1[arr1.length-1]}`);
