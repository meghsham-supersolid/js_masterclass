//replaces first occurrence
let str = "Lenovo-Legion-Y540-Intel-I9";
let trimmedString = str.replace("-", " ");
console.log(trimmedString);

//replaces all occurrences
let allTrimmedString = str.replaceAll("-", " ");
console.log(allTrimmedString);
