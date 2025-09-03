/* 
    mapName.has(key) used to check if given key is present in map or not the returns boolean values accordingly 
*/
const myMap = new Map();

myMap.set("firstName", "Meghsham");
myMap.set("lastName", "Kapure");

console.log(myMap.has("firstName")); // true
console.log(myMap.has("lastName")); // true
console.log(myMap.has("middleName")); // false
