/* 
    mapName.delete(key) used to delete given key already present in map, return boolean value accordingly.
*/
const myMap = new Map();

myMap.set("firstName", "Meghsham");
myMap.set("lastName", "Kapure");

console.log(`Map before deletion `);
console.log(myMap);

console.log(myMap.delete("firstName")); // true
console.log(myMap.delete("lastName")); // true
console.log(myMap.delete("middleName")); // false

console.log(`Map after deletion `);
console.log(myMap);
