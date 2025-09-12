const arr = [4, 2, 5, 7];

function sortArrayByParity(nums) {
    const evenNums  = []; 
    const oddNums  = []; 
    for (let i =0; i< nums.length;i++){
        if (nums[i] % 2 == 0){
           evenNums.push(nums[i]);
        }else{
           oddNums.push(nums[i]);
        }  
    }


    const newArr = [];

    for (let i = 0; i<nums.length/2;i++){
        newArr.push(evenNums[i]);
        newArr.push(oddNums[i]);
    }
    return newArr;    
}


const sortedArray = sortArrayByParity(arr);

console.log(arr);
console.log(sortedArray);
