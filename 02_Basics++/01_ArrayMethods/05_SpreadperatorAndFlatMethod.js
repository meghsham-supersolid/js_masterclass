// SPREAD operator

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = [7, 8, 9];

const numsAll = [...nums1, ...nums2, ...nums3];

console.log(
  `Elements in numsAll ${numsAll} and its length is ${numsAll.length}`
);

// spread operator takes all the arrays, breaks every arrays, collect all elements and store them into a new array

console.log("\n");

const vehicles = [
  ["Car", "Car", "Car", "Car"],
  ["SuperCar", "SuperCar"],
  ["Bike", "Bike", "Bike", "Bike", ["SuperBike", "SuperBike"]],
  "Ship",
  "Airplane",
  "Helicopter",
];

const allVehicles = vehicles.flat(Infinity);
console.log(
  `Elements in allVehicles ${allVehicles} and its length is ${allVehicles.length}`
);

// when give nested array, and we want to create flat array where each element is stored on separate index, then we can use flat(), which takes input of flat level which means the how many level of nesting we want to flat
