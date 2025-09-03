/* 
    mapName.clear(key) used to delete all entries in map
*/
const myMap = new Map();

myMap.set("firstName", "Meghsham");
myMap.set("lastName", "Kapure");

console.log(`Map before clear() `);
console.log(myMap);

myMap.clear();

console.log(`Map after clear() `);
console.log(myMap);
