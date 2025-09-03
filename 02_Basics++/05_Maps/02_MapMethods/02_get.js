/* 
mapName.get(key) used to get the  value of give already existing key from th map, if the key is present in map the return undefined
*/
const myMap = new Map();
myMap.set("firstName", "Meghsham");
myMap.set("lastName", "Kapure");

console.log(myMap.get("firstName")); //Meghsham
console.log(myMap.get("lastName")); // Kapure
console.log(myMap.get("middleName")); // undefined
